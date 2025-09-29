import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout.jsx";
import SecondaryLayout from "../../layouts/SecondaryLayout/SecondaryLayout.jsx";
import Home from "../../pages/Home/Home.jsx";
import About from "../../pages/About/About.jsx";
import Team from "../../pages/Team/Team.jsx";
import TeamDetail from "../../pages/TeamDetail/TeamDetail.jsx";

// const fakeUsers = [
//     { id: "sug__11", name: "Alice" },
//     { id: "slug_2", name: "Bob" },
// ];
const fakeUsers = [
    { id: "sug__11", name: "Michael Dean", role: "Event Planner", },
    { id: "slug_2", name: "Sophia Carter", role: "Hotel Manager", },
    { id: "slug_3", name: "James Parker", role: "Receptionist", },
    { id: "slug_4", name: "Isabella Moore", role: "Room Service", },
    { id: "slug_5", name: "Ethan Brooks", role: "Chef", },
    { id: "slug_6", name: "Olivia Bennett", role: "Event Assistant", },
    { id: "slug_7", name: "William Foster", role: "Security", },
    { id: "slug_8", name: "Emily Ross", role: "Housekeeper", },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [{ index: true, element: <Home /> }],
    },
    {
        path: "/about",
        element: <SecondaryLayout />,
        children: [{ index: true, element: <About /> }],
    },
    {
        path: "/team",
        element: <SecondaryLayout />,
        handle: { breadcrumbs: () => [{ path: "/team", label: "Team" }] },
        children: [
            { index: true, element: <Team /> },
            {
                path: ":id",
                element: <TeamDetail />,
                handle: ({ id }) => {
                    const user = fakeUsers.find((u) => u.id === id);
                    return [{ path: `/team/${id}`, label: user ? user.name : "User" }];
                },
            },
        ],
    },
]);

export default router;
