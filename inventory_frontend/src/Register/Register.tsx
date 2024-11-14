import { Box, Button, TextField } from "@mui/material"


export const Register = () => {

    const style = "w-full "
    const rowStyle = "mt-5 "


    return(
        <Box 
            className="mt-10 mx-auto" 
            sx={{width:{md:"60%", sm:"70%", xs:"80%"}}}
        >
                <div className={rowStyle}>
                    <TextField
                        className={style}
                        error={false}
                        id="register-name"
                        label="Nombre"
                        helperText=""
                    />
                </div>
                    <Box className={"flex gap-5 flex-wrap justify-between " + rowStyle}
                        sx={{gap:{lg:0}}}
                    >
                        <TextField
                            className={style}
                            sx={{width:{lg:"49%"}}}
                            error={false}
                            id="register-last-name"
                            label="Apellido Paterno"
                            helperText=""
                        />
                        <TextField
                            className={style + rowStyle}
                            sx={{width:{lg:"49%"}}}
                            error={false}
                            id="register-second-last-name"
                            label="Apellido Materno"
                            helperText=""
                        />
                    </Box>
                    <div className={rowStyle}>
                    <TextField
                        className={style}
                        error={false}
                        id="register"
                        label="Correo"
                        helperText=""
                    />
                    </div>
                    <div className={rowStyle}>
                    <TextField
                        className={style}
                        error={false}
                        id="register"
                        label="Contraseña"
                        helperText=""
                    />
                    </div>
                    <div className={rowStyle}>
                    <TextField
                        className={style}
                        error={false}
                        id="register"
                        label="Repita su contrasena"
                        helperText=""
                    />
                    </div>
                    <div className={"mx-auto w-full "+ rowStyle}>
                        <Button variant="outlined"
                            sx={{width:"100%", py:2}}
                        >
                            Registrarse
                        </Button>
                    </div>
        </Box>
    )
}