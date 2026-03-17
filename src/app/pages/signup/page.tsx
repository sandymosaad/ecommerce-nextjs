'use client'
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {inputSignupData} from "../../staticData/authInputData"
import AuthFormContainer from '@/components/AuthFormContainer';
import {useFormik} from "formik";
import { validationSchema } from '@/authValidations/signupValidtion';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';

export default function SignUp() {
    const router = useRouter()
    async function submit(values: any) {
    //console.log("Sign up values:", values);
     await handleSignup({
        name: values.name,
        email: values.email,
        password: values.password,
        role: values.role
        })
    }
    async function handleSignup(formData: { name: string; email: string; password: string;role:string }) {
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const contentType = res.headers.get("content-type");
            let data: any = null;

            if (contentType && contentType.includes("application/json")) {
                data = await res.json();
            } else {
                const text = await res.text();
               //console.error("Expected JSON but got:", text);
                throw new Error("Server did not return JSON");
            }

            //console.log("Signup response:", data);

            if (!res.ok) throw new Error(data?.error || "Signup failed");
            toast.success("User registered successfully!")
            router.push('/pages/login')
        } catch (err: any) {
            toast.error(err.message);
        }
        }
     const formik =useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            rePassword:"",
            role:"user",
        },
        validationSchema,
        onSubmit:submit,
    })
    return(
        <AuthFormContainer 
        inputData={inputSignupData}
        headerPar1='Create Account'
        headerPar2='Join us and start shopping'
        fotterBtn='Sign Up'
        fotterPath='/pages/login'
        fotterPar='Already have an account? '
        headerIcon={<PersonAddIcon/>}
        linkString='Login'
        formik={formik}
        hasAccount={false}

        />
    )
}
