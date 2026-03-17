import {Container,Paper,Box,Typography,TextField,Link as
MuiLink,Button,InputAdornment,
Radio,
RadioGroup,
FormControlLabel,
FormLabel , IconButton} from "@mui/material";
import {theme} from '../styles/theme'
import Link from 'next/link';
import {ReactNode} from "react";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
interface AuthFormContainerProps{
    inputData:any[],
    headerIcon:ReactNode,
    headerPar1:string,
    headerPar2:string,
    fotterPar:string,
    fotterBtn:string,
    linkString:string,
    fotterPath:string,
    formik:any,
    hasAccount:boolean
}
export default function AuthFormContainer(
    {inputData,
    headerIcon,
    headerPar1,
    headerPar2,
    fotterPar,
    fotterBtn,
    fotterPath,
    linkString,
    formik,
    hasAccount
    }:AuthFormContainerProps) {
        const [showPasswords, setShowPasswords] = useState<{[key:string]:boolean}>({});

        const handleClickShowPassword = (name:string) => {
        setShowPasswords(prev => ({...prev, [name]: !prev[name]}));
        };

 return <Container maxWidth="sm">
            <Paper elevation={4} sx={{ p: 5, mt: 8, borderRadius: 3}}>
                <Box
                component="form"
                onSubmit={formik.handleSubmit}
                display="flex"
                flexDirection="column"
                gap={3}
                >
                <Box sx={{textAlign:"center"}}>
                    <Box color={theme.colors.primary} sx={{borderRadius:theme.borderRadius.round}} >{headerIcon}</Box>
                    <Typography variant="h5" fontWeight={theme.fontWeights.bold}>
                        {headerPar1}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{fontSize:theme.fontSizes.md}}>
                        {headerPar2}
                    </Typography>
                </Box>
 

                {inputData.map((input) => {
                    const Icon = input.icon;
                    const isPassword = input.inputType === "password"; 
                    return (
                  <TextField
                    key={input.inputName}
                    fullWidth
                    label={input.label}
                    name={input.inputName}
                    type={isPassword && showPasswords[input.inputName] ? "text" : input.inputType} // here
                    placeholder={input.placeholder}
                    value={formik.values[input.inputName]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched[input.inputName] && Boolean(formik.errors[input.inputName])}
                    helperText={formik.touched[input.inputName] && formik.errors[input.inputName]}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <Icon />
                        </InputAdornment>
                        ),
                        endAdornment: isPassword ? (
                        <InputAdornment position="end">
                            <IconButton
                            onClick={() => handleClickShowPassword(input.inputName)}
                            edge="end"
                            size="small"
                            >
                            {showPasswords[input.inputName] ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        ) : null
                    }}
                    sx={{ mb: 2 }}
                    />
                    
                    );
                })}
                {!hasAccount && (
                <>
                    <FormLabel component="legend">Role</FormLabel>
                    <RadioGroup
                    name="role"
                    value={formik.values.role}
                    onChange={formik.handleChange}
                    >
                        <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                        <FormControlLabel value="user" control={<Radio />} label="User" />
                    </RadioGroup>
                </>
                )}
                <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    sx={{ fontSize: 18, mt: 2 }}
                >
                    {fotterBtn}
                </Button>


                <Typography textAlign="center" variant="body2" sx={{fontSize:'1.5rem'}}>
                    {fotterPar}
                    <MuiLink component={Link} href={fotterPath} underline="hover">
                    {linkString}
                    </MuiLink>
                </Typography>
                </Box>
            </Paper>
        </Container>;
}

 