import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./Navbar/Navbar"
import { Login } from "./Login/Login"
import { Register } from "./Register/Register"
import { Employees } from "./Employees/Employees"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { loadUser } from "./APIs/AuthAPI"
import { updateUserAction } from "./Redux/UserSlice"
import { User } from "./User/User"



const App = () => {

    const distpactch = useDispatch();

    const checkUser = async () => {
        let user = await loadUser();
        if(user?.data !== ""){
            distpactch(updateUserAction({logged:true}));
        }
    }

    useEffect(() => {
        checkUser();
    },[])
 
    return(
        <div className="w-screen h-screen flex flex-col flex-grow">
            <BrowserRouter>  
            <div className="h-16">
            <Navbar/>
            </div>
            <div>
                <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/employees" element={<Employees/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/user" element={<User/>} />
                </Routes>
            </div>
            </BrowserRouter>

        </div>
    )
}

export default App