'use client'
import {theme} from '../../styles/theme'
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {Container,Paper,Box,Typography,TextField,Alert,Link as
MuiLink,Button,RadioGroup,FormControlLabel,Radio,FormLabel,
InputAdornment} from "@mui/material";
import Link from 'next/link';
import {inputLoginData} from "../staticData/authInputData"
import LoginIcon from "@mui/icons-material/Login";
import AuthFormContainer from '@/components/AuthFormContainer';

export default function Login() {
  return (
          <AuthFormContainer 
          inputData={inputLoginData}
          headerPar1='Welcome Back'
          headerPar2='Sign in to your account'
          fotterBtn='Login'
          fotterPath='/signup'
          fotterPar="Don't have an account? "
          headerIcon={<LoginIcon/>}
          linkString='Sign up'
          />
      )
}
