import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout.jsx";
import SecondaryLayout from "../../layouts/SecondaryLayout/SecondaryLayout.jsx";
import Home from "../../pages/Home/Home.jsx";
import About from "../../pages/About/About.jsx";
import Team from "../../pages/Team/Team.jsx";
import TeamDetail from "../../pages/TeamDetail/TeamDetail.jsx";

export const teamMembers = [
    { id: "sug__11", name: "Michael Dean" },
    { id: "slug_2", name: "Sophia Carter" },
    { id: "slug_3", name: "James Parker" },
    { id: "slug_4", name: "Isabella Moore" },
];

const router = createBrowserRouter([
    { path: "/", element: <MainLayout />, children: [{ index: true, element: <Home /> }] },
    { path: "/about", element: <SecondaryLayout />, children: [{ index: true, element: <About /> }] },
    {
        path: "/team",
        element: <SecondaryLayout />,
        handle: { breadcrumbs: () => [{ path: "/", label: "Home" }, { path: "/team", label: "Team" }, { path: "#", label: "Team-Detail" }] },
        children: [
            { index: true, element: <Team /> },
            {
                path: ":id",
                element: <TeamDetail />,
                handle: ({ id }) => {
                    const user = teamMembers.find(u => u.id === id);
                    return [{ path: `/team/${id}`, label: user?.name || "User" }];
                },
            },
        ],
    },
]);

export default router;
