import { Box, Button, TextField } from "@mui/material"
import { useRef, useState } from "react"


export const Register = () => {

    const [org,setOrg ] = useState("");
    const [name,setName ] = useState("");
    const [lastName,setLastName ] = useState("");
    const [secondLastName,setSecondLastName ] = useState("");
    const [email,setEmail ] = useState("");
    const [password,setPassword ] = useState("");
    const [repeatPassword,setRepeatPassword ] = useState("");

    const [orgError,setOrgError ] = useState("");
    const [nameError,setNameError ] = useState("");
    const [lastNameError,setLastNameError ] = useState("");
    const [secondLastNameError,setSecondLastNameError ] = useState("");
    const [emailError,setEmailError ] = useState("");
    const [passwordError,setPasswordError ] = useState("");
    const [repeatPasswordError,setRepeatPasswordError ] = useState("");



    const style = "w-full "
    const rowStyle = "mt-5 "

    const  validateName = (nameInput:string):boolean => {
        if(nameInput.split("").length > 10){
            setNameError("nombre muy largo");
            return false;
        }
        setNameError("");
        setName(nameInput);
        return true;
    }
    const  validateOrgName = (OrgNameInput:string):boolean => {
        if(OrgNameInput.split("").length > 10){
            setNameError("nombre muy largo");
            return false;
        }
        setOrgError("");
        setOrg(OrgNameInput);
        return true;
    }
    const  validateLastName = (lastNameInput:string):boolean => {
        if(lastNameInput.split("").length > 10){
            setLastNameError("apellido");
            return false;
        }
        setLastNameError("");
        setLastName(lastNameInput);
        return true;
    }
    const  validateSecondLastName = (secondLastNameInput:string):boolean => {
        if(secondLastNameInput.split("").length > 10){
            setNameError("apellido");
            return false;
        }
        setSecondLastNameError("");
        setSecondLastName(secondLastNameInput);
        return true;
    }
    const  validateEmail = (emailInput:string):boolean => {
        setEmail(emailInput);
        return true;
    }
    const  validatePassword = (passwordInput:string):boolean => {
        setPassword(passwordInput)
        if(repeatPassword) validateRepeatPassword(passwordInput,repeatPassword);
        return true;
    }
    const  updateRepeatPassword = (passwordInput:string):void => {
        setRepeatPassword(passwordInput);
        validateRepeatPassword(password,passwordInput);
        
    }

    const validateRepeatPassword = (passwordOrgin:string, passwordCopy:string):boolean => {
        if(!passwordCopy){
            setRepeatPasswordError("");
            return false;
        }
        if(passwordOrgin !== passwordCopy){
            setRepeatPasswordError("Las contraseñas son diferentes");
            return false;
        };
        setRepeatPasswordError("");
        return true;
    }

    const validate = () => {
    }


    return(
        <Box 
            className="mt-24 mx-auto" 
            sx={{width:{md:"60%", sm:"70%", xs:"80%"}}}
        >
                <div className={rowStyle}>
                    <TextField 
                        onChange={(e) => validateOrgName(e.target.value)}
                        value={org}
                        className={style}
                        error={orgError!==""}
                        id="register-organization-name"
                        label="Nombre de organizacion"
                        helperText={orgError}
                    />
                </div>
                <div className={rowStyle}>
                    <TextField  
                        error={nameError!==""}
                        onChange={(e) => validateName(e.target.value)}
                        value={name}
                        className={style}
                        id="register-name"
                        label="Nombre"
                        helperText={nameError}
                    />
                </div>
                    <Box className={"flex gap-5 flex-wrap justify-between " + rowStyle}
                        sx={{gap:{lg:0}}}
                    >
                        <TextField 
                            onChange={(e) => validateLastName(e.target.value)} 
                            value={lastName} 
                            className={style}
                            sx={{width:{lg:"49%"}}}
                            error={lastNameError!==""}
                            id="register-last-name"
                            label="Apellido Paterno"
                            helperText={lastNameError}
                        />
                        <TextField  
                            onChange={(e) => validateSecondLastName(e.target.value)}
                            value={secondLastName}
                            className={style + rowStyle}
                            sx={{width:{lg:"49%"}}}
                            error={secondLastNameError!==""}
                            id="register-second-last-name"
                            label="Apellido Materno"
                            helperText={secondLastNameError}
                        />
                    </Box>
                    <div className={rowStyle}>
                    <TextField  
                        type="email"
                        onChange={(e) => validateEmail(e.target.value)}
                        value={email}
                        className={style}
                        error={emailError!==""}
                        id="register-email"
                        label="Correo"
                        helperText={emailError}
                    />
                    </div>
                    <div className={rowStyle}>
                    <TextField  
                        type="password"
                        onChange={(e) => validatePassword(e.target.value)}
                        value={password}
                        className={style}
                        error={passwordError!==""}
                        id="register-password"
                        label="Contraseña"
                        helperText={passwordError}
                    />
                    </div>
                    <div className={rowStyle}>
                    <TextField  
                        type="password"
                        onChange={(e) => updateRepeatPassword(e.target.value)}
                        value={repeatPassword}
                        className={style}
                        error={repeatPasswordError!==""}
                        id="register-password-repeat"
                        label="Repita su contrasena"
                        helperText={repeatPasswordError}
                    />
                    </div>
                    <div className={"mx-auto w-full "+ rowStyle}>
                        <Button variant="outlined"
                        onClick={validate}
                            sx={{width:"100%", py:2}}
                        >
                            Registrarse
                        </Button>
                    </div>
        </Box>
    )
}