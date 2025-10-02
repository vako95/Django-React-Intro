import { RouterProvider } from "react-router-dom";
import router from "../app/routers/routers.jsx";
import { store } from "./../store/store.js";
import { Provider } from "react-redux";
import "./App.css";

const App = () => {
    return <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>


}

export default App;