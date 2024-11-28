import {  Button, Card, TextField } from "@mui/material"
import { useState } from "react";

export const NewItem = () => {


    const [image, setImage] = useState<File|null>(null);
    const [tempImage, setTempImage] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);

    const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => { 
        if(e.target.files != null){
            console.log(e.target.files[0].name)
            setTempImage(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0]);
        }
    }

    return (
        <Card raised  className="mx-auto w-5/6 p-8 mt-20" >
            <div>
                <TextField
                margin="dense" 
                sx={{my:3}}
                fullWidth
                slotProps={{htmlInput:{maxLength:30}}}
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="register-item-name"
                label="Nombre del producto"/>
            </div>
            <div className="flex w-full">
                <div className="w-7/12 mr-10">
                    <div>
                        <TextField 
                        type="number"
                        sx={{my:3}}
                        fullWidth
                        slotProps={{htmlInput:{maxLength:30}}}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        id="register-item-quantity"
                        label="Cantidad inicial"/>
                    </div>
                    <div>
                        <TextField 
                        className="flex-1 w-full"
                        sx={{my:3}}
                        type="file"
                        slotProps={{htmlInput:{maxLength:30, accept:"image/png, image/jpeg"}}}
                        onChange={changeImage}
                        error={false}
                        id="register-item-name"
                        helperText={""}/>
                    </div>
                </div>
                <div className="w-4/12">
                    <img src={tempImage} style={{width:"100%"}} className="w-full h-full mt-2"  />
                </div>
            </div>
            <Button className="w-full" sx={{marginTop:4, py:1}} variant="contained">
                Guardar
            </Button>
        </Card >
    )
}