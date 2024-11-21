import {IconButton, List, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { EmployeeCard } from "./EmployeeCard"
import { Employee } from "./Employees"
import { NewEmployeeModal } from "./NewEmployeeModal";
import { useState } from "react";

 
 export const EmployeeList = ({employees}:{employees:Employee[]} ) => {
    const [openModal, setOpenModal] = useState(false);
    
    const handleClose = () => {
        setOpenModal(prev => !prev);
    }

    const handleOpen = () => {
        setOpenModal(prev => !prev);
    }


    return(
        <div className="mx-auto w-fit h-fit" >
            <NewEmployeeModal open={openModal} handleClose={handleClose} />
            <div className="flex">
            <TextField size="small" sx={{width:"70vw"}}/>
            <IconButton onClick={handleOpen} >
                <AddIcon/>
            </IconButton >
            </div>
            <List sx={{width:"60vw", bgcolor: 'background.paper', margin:"0 auto" }}>
                {employees.map((employee, id) => (
                    <>
                        {<EmployeeCard key={id} employee={employee} />}
                    </>
                )) }
            </List >
        </div>
    )
 }