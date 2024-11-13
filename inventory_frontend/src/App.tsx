import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./Navbar/Navbar"
import { Login } from "./Login/Login"

const App = () => {
    
    return(
        <>
            <Navbar/>
            <BrowserRouter>            
                <Routes>
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App