import { createBrowserRouter } from "react-router-dom";
import { MainLayout, SubLayout, AuthLayout, BlankLayout } from '@src/layouts';
import {
    HomePage,
    AboutPage,
    GalleryPage,
    ContactPage,
    FaqPage,
    QuotePage,
    RoomPage,
    PricingPage,
    TeamPage,
    TeamDetailPage,
    LoginPage,
    RegisterPage,
    ResetPasswordPage,
    ChangePasswordPage,
    DebugPages,
    NotFoundPage,
} from "@src/pages";
import RoomDetailsPage from "../../pages/main/RoomDetailPage/RoomDetailPage";



export const teamMembers = [
    { id: "sug__11", name: "Michael Dean" },
    { id: "slug_2", name: "Sophia Carter" },
    { id: "slug_3", name: "James Parker" },
    { id: "slug_4", name: "Isabella Moore" },
];

const router = createBrowserRouter([
    { path: "/", element: <MainLayout />, children: [{ index: true, element: <HomePage /> }] },
    {
        element: <SubLayout />, handle: { breadcrumbs: () => [{ path: "/", label: "Home" }] },
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "/about",
                element: <AboutPage />,
                handle: { breadcrumbs: () => [{ path: "#", label: "About" }] },
            },
            {
                path: "/gallery",
                element: <GalleryPage />,
                handle: { breadcrumbs: () => [{ path: "#", label: "About" }] },
            },

            {
                path: "/team",
                handle: { breadcrumbs: () => [{ path: "/team", label: "Team" },] },
                children: [
                    { index: true, element: <TeamPage /> },

                    {
                        path: ":id",
                        element: <TeamDetailPage />,
                        handle: {
                            breadcrumbs: (id) => {
                                const user = teamMembers.find(u => u.id === id);
                                return [{ path: `/team/${id}`, label: user?.name || "User" }];
                            }
                        }
                    },
                ],
            },
            {
                path: "faq",
                element: <FaqPage />,
                handle: { breadcrumbs: () => [{ path: "#", label: "Faq" }] },
            },
            {
                path: "room",
                element: <RoomPage />,
                handle: { breadcrumbs: () => [{ path: "#", label: "Rooms" }] },
            },
            {
                path: "rooms_detail",
                element: <RoomDetailsPage />,
                handle: { breadcrumbs: () => [{ path: "#", label: "Room Details" }] },
            },


        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { index: true, element: <LoginPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
            { path: "reset", element: <ResetPasswordPage /> },
            { path: "reset/:token", element: <ChangePasswordPage /> },
        ]
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
    // {
    //     path: "/auth_nav", element: <SubLayout />,
    //     handle: { breadcrumbs: () => [{ path: "/", label: "Home" }, { path: "#", label: "Contact" }] },
    //     children: [
    //         { index: true, element: <AuthNavPage /> }
    //     ]
    // },
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
                { path: "#", label: "Page Not Found" }
            ]
        },
        children: [
            { index: true, element: <NotFoundPage /> }
        ]
    }
]);

export default router;
