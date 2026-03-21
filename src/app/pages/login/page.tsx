'use client'
import {inputLoginData} from "../../staticData/authInputData"
import LoginIcon from "@mui/icons-material/Login";
import AuthFormContainer from '@/components/AuthFormContainer';
import {validationSchema} from "@/authValidations/loginValidtion"
import {useFormik} from "formik";
import { toast } from "sonner";
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";

export default function Login() {
    const router = useRouter()
    async function submit(values: any) {
    //console.log("Sign up values:", values);
     await handleLogin({
        email: values.email,
        password: values.password,
        })
    }
   async function handleLogin(formData: { email: string; password: string }) {
    try {
        const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        });

        const data = await res.json();
        //console.log(data)

        if (!res.ok) throw new Error(data?.error || "Login failed");
        toast.success("Login successful!");
        const role = data.user.role;
        
        if (role === "admin") {
        router.push("/admin-dashboard");
        } else {
        router.push("/products");
        }

    } catch (err: any) {
        toast.error(err.message);
    }
    }

    const formik =useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema,
        onSubmit:submit,
    })
    return(
            <AuthFormContainer 
            inputData={inputLoginData}
            headerPar1='Welcome Back'
            headerPar2='Sign in to your account'
            fotterBtn='Login'
            fotterPath='/pages/signup'
            fotterPar="Don't have an account? "
            headerIcon={<LoginIcon/>}
            linkString='Sign up'
            formik={formik}
            hasAccount={true}
            />
        )
}
