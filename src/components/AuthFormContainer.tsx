import {Container,Paper,Box,Typography,TextField,Alert,Link as
MuiLink,Button,RadioGroup,FormControlLabel,Radio,FormLabel,
InputAdornment} from "@mui/material";
import {theme} from '../styles/theme'
import Link from 'next/link';
import {ReactNode} from "react";

interface AuthFormContainerProps{
    inputData:any[],
    headerIcon:ReactNode,
    headerPar1:String,
    headerPar2:String,
    fotterPar:String,
    fotterBtn:String,
    linkString:String,
    fotterPath:string,
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
    }:AuthFormContainerProps) {
 return <Container maxWidth="sm">
            <Paper elevation={4} sx={{ p: 5, mt: 8, borderRadius: 3}}>
                <Box
                component="form"
                //onSubmit={formik.handleSubmit}
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
                    return (
                    <TextField
                        key={input.inputName}
                        fullWidth
                        label={input.label}
                        name={input.inputName}
                        type={input.inputType}
                        placeholder={input.placeholder}
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                            <Icon />
                            </InputAdornment>
                        ),
                        }}
                        sx={{ mb: 2 }}
                    />
                    );
                })}

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

 