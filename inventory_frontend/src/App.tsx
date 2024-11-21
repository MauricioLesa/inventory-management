import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./Navbar/Navbar"
import { Login } from "./Login/Login"
import { Register } from "./Register/Register"
import { Employees } from "./Employees/Employees"

const App = () => {
    
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
                </Routes>
            </div>
            </BrowserRouter>

        </div>
    )
}

export default App