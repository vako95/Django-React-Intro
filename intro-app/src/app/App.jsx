import { RouterProvider } from "react-router-dom";

import router from "./routers/routers.jsx";
import { Tooltip } from "react-tooltip"
import "./App.css"
const App = () => {

    return (
        <>
            <RouterProvider router={router} />
            <Tooltip id="my-tooltip" float={true} />
        </>
    );
}

export default App;