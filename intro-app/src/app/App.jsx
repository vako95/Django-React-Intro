
import {Routes, Route} from "react-router-dom"
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home.jsx";
import "./App.css"

function App() {

    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default App;