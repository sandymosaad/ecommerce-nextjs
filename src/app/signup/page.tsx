'use client'
import {theme} from '../../styles/theme'
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {Container,Paper,Box,Typography,TextField,Alert,Link as
MuiLink,Button,RadioGroup,FormControlLabel,Radio,FormLabel,
InputAdornment} from "@mui/material";
import Link from 'next/link';
import {inputSignupData} from "../staticData/authInputData"
import AuthFormContainer from '@/components/AuthFormContainer';
export default function SignUp() {
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
        />
    )
}
