'use client'
import {inputLoginData} from "../../staticData/authInputData"
import LoginIcon from "@mui/icons-material/Login";
import AuthFormContainer from '@/components/AuthFormContainer';
import {validationSchema} from "@/authValidations/loginValidtion"
import {useFormik} from "formik";

export default function Login() {
    function submit(values: any) {
       console.log("Login values:", values);
    // call API or navigate
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
