
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../../layouts/MainLayout/MainLayout.jsx";
import SecondaryLayout from "../../layouts/SecondaryLayout/SecondaryLayout.jsx";
import Home from "../../pages/Home/Home.jsx";
import About from "../../pages/About/About.jsx";
import Team from "../../pages/Team/Team.jsx";


const fakeUsers = [
    { id: "sug__11", name: "Alice" },
    { id: "suck_2", name: "Bob" },
];
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                {
                    // path: "",
                    index: true,
                    element: <Home />,
                }
            ]
        },
        {
            path: "/about",
            element: <SecondaryLayout />,
            children: [
                {
                    index: true,
                    element: <About />,
                }
            ]
        },
        {
            path: "/",
            element: <SecondaryLayout />,
            handle: {
                breadcrumbs: () => {
                    return [
                        { path: "/", label: "Home" },
                    ]
                }
            },
            children: [
                {
                    path: "team",
                    element: <Team />,
                    handle: {
                        breadcrumbs: () => {
                            return [
                                { path: "/team", label: "Team" }
                            ]
                        }
                    },
                    children: [
                        {
                            path: ":id",
                            element: <Team />,
                            handle: {
                                breadcrumbs: ({ id }) => {
                                    const user = fakeUsers.find(u => u.id === id);
                                    return [{ path: `/team/${id}`, label: user ? user.name : "User" }];
                                }
                            }
                        },
                    ]
                },

            ]
        },


    ]

);

export default router;