import { Box, Button, TextField } from "@mui/material"
import { useRef } from "react"

export const Login = () => {

    const style = "w-full "
    const emailRef = useRef<HTMLInputElement>(null);

    const emailValidate = () => {
        console.log(emailRef.current?.value)
    }



    return (
        <Box
        className="mt-24 mx-auto text-center" 
        sx={{width:{md:"30%", sm:"50%", xs:"80%"}}}
        >
            <TextField
                        inputRef={emailRef}
                        margin="normal"
                        className={style}
                        error={false}
                        id="login-email"
                        label="email"
                        helperText=""
                        onChange={emailValidate}
                    />
            <TextField
                        type="password"
                        margin="normal"
                        className={style}
                        error={false}
                        id="login-password"
                        label="password"
                        helperText=""
            />
            <div className="mt-2">
            <Button className="w-52" size="large" variant="contained">Iniciar sesion</Button>
            </div>
            <p className="mt-2">o</p>
            <div className="mt-2">
            <Button className="w-52 my-16" size="large"  variant="outlined">Registrarse</Button>
            </div>
            <div className="mt-4"   >
            <Button className="w-52" size="large"  variant="outlined">Inicio con Google</Button>
            </div>
        </Box>
    )
}