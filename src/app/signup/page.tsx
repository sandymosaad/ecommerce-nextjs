'use client'
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {inputSignupData} from "../staticData/authInputData"
import AuthFormContainer from '@/components/AuthFormContainer';
import {useFormik} from "formik";
import { validationSchema } from '@/authValidations/signupValidtion';

export default function SignUp() {
    function submit(values: any) {
    console.log("Sign up values:", values);
    // call API or navigate
    }
     const formik =useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            rePassword:"",
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
        fotterPath='/login'
        fotterPar='Already have an account? '
        headerIcon={<PersonAddIcon/>}
        linkString='Login'
        formik={formik}
        />
    )
}
