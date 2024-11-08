import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Navbar/Navbar"
import { Login } from "./Login/Login"

const App = () => {
    
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="login" element={<Login/>} />
            </Routes>
        </>
    )
}

export default App