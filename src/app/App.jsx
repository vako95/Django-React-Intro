import { RouterProvider } from "react-router-dom";

import router from "./routers/routers.jsx";
import "./App.css"
const App = () => {

    return (
        <RouterProvider router={router} />
    );
}

export default App;