import { createBrowserRouter } from "react-router-dom";
import { MainLayout, SubLayout } from '@src/layouts';
import { Home, About, GalleryPage, Team, TeamDetail, ContactPage } from "@src/pages";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

import AuthNavPage from "../../pages/auth/AuthNavPage/AuthNavPage";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Login from "../../components/module/Login/Login";
import Register from "../../components/module/Register/Register";
import DebugPages from "../../pages/DebugPages/DebugPages";
import BlankLayout from "../../layouts/BlankLayout/BlankLayout";
import Reset from "../../components/module/ResetPassword/ResetPassword";
import ResetPasswordConfirm from "../../components/module/ResetPasswordConfirm/ResetPasswordConfirm";
import PricingPage from "../../pages/PricingPage/PricingPage";
import QuotePage from "../../pages/QuotePage/QuotePage";


export const teamMembers = [
    { id: "sug__11", name: "Michael Dean" },
    { id: "slug_2", name: "Sophia Carter" },
    { id: "slug_3", name: "James Parker" },
    { id: "slug_4", name: "Isabella Moore" },
];

const router = createBrowserRouter([
    { path: "/", element: <MainLayout />, children: [{ index: true, element: <Home /> }] },
    {
        path: "/about", element: <SubLayout />,
        handle: { breadcrumbs: () => [{ path: "/", label: "Home" }, { path: "#", label: "About" }] },
        children: [
            { index: true, element: <About /> },

        ]
    },
    {
        path: "/team",
        element: <SubLayout />,
        handle: { breadcrumbs: () => [{ path: "/", label: "Home" }, { path: "/team", label: "Team" },] },
        children: [
            { index: true, element: <Team /> },

            {
                path: ":id",
                element: <TeamDetail />,
                handle: (
                    { id }) => {
                    const user = teamMembers.find(u => u.id === id);
                    return [{ path: `/team/${id}`, label: user?.name || "User" }];
                },
            },
        ],
    },
    {
        path: "/team/:id",
        element: <SubLayout />,
        handle: { breadcrumbs: () => [{ path: "/", label: "Home" }, { path: "/team", label: "Team" }, { path: "#", label: "Team-Detail" }] },
        children: [
            { index: true, element: <TeamDetail /> },

            {
                path: ":id",
                element: <TeamDetail />,
                handle: (

                    { id }) => {
                    // const user = teamMembers.find(u => u.id === id);
                    // return [{ path: `/team/${id}`, label: user?.name || "User" }];
                    const user = useSelector(state => state.user[id]);
                    return { path: user?.id, label: user?.name || `#${id}` };
                },
            },
        ],
    },
    {
        path: "/gallery", element: <SubLayout />,
        handle: { breadcrumbs: () => [{ path: "/", label: "Home" }, { path: "#", label: "Gallery" }] },
        children: [
            { index: true, element: <GalleryPage /> },
        ]
    },
    {
        path: "/contact", element: <SubLayout />,
        handle: { breadcrumbs: () => [{ path: "/", label: "Home" }, { path: "#", label: "Contact" }] },
        children: [
            { index: true, element: <ContactPage /> }
        ]
    },
    {
        path: "/auth_nav", element: <SubLayout />,
        handle: { breadcrumbs: () => [{ path: "/", label: "Home" }, { path: "#", label: "Contact" }] },
        children: [
            { index: true, element: <AuthNavPage /> }
        ]
    },
    {
        path: "/pricing", element: <SubLayout />,
        handle: { breadcrumbs: () => [{ path: "/", label: "Home" }, { path: "#", label: "Pricing PLan" }] },
        children: [
            { index: true, element: <PricingPage /> }
        ]
    },
    {
        path: "/quote", element: <SubLayout />,
        handle: { breadcrumbs: () => [{ path: "/", label: "Home" }, { path: "#", label: "Quote" }] },
        children: [
            { index: true, element: <QuotePage /> }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { index: true, element: <Login /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            // { path: "register", element: <RegisterPage /> },
            { path: "reset", element: <Reset /> },
            { path: "reset/:token", element: <ResetPasswordConfirm /> },
        ]
    },

    {
        path: "/debug",
        element: <BlankLayout />,
        handle: {
            breadcrumbs: () => [
                { path: "/", label: "Home" },
                { path: "#", label: "Page Not Found" }
            ]
        },
        children: [
            { index: true, element: <DebugPages /> }
        ]
    },
    {
        path: "*",
        element: <SubLayout />,
        handle: {
            breadcrumbs: () => [
                { path: "/", label: "Home" },
                { path: "#", label: "Page Not Found" }
            ]
        },
        children: [
            { index: true, element: <ErrorPage /> }
        ]
    }
]);

export default router;
