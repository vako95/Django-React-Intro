

const navbarNav = [
    {
        id: 1,
        name: "HOME",
        link: "/",
        dropdown: []
    },
    {
        id: 2,
        name: "PAGES",
        link: "/pages",
        dropdown: [
            {
                id: 21,
                name: "About",
                link: "/about"
            },
            {
                id: 23,
                name: "Gallery",
                link: "/gallery"
            },
            {
                id: 26,
                name: "Team",
                link: "/team",
                dropdown: [
                    {
                        id: 241,
                        name: "Our Team",
                        link: "/team/our_team"
                    },
                    {
                        id: 242,
                        name: "Management",
                        link: "/team/management",
                        dropdown: [
                            {
                                id: 2421,
                                name: "Top Management",
                                link: "/team/management/top"
                            }
                        ]
                    }
                ]
            },
            {
                id: 25,
                name: "Contact",
                link: "/contact"
            }
        ]
    },
    {
        id: 3,
        name: "SERVICES",
        link: "/services",
        dropdown: []
    },
    {
        id: 4,
        name: "ROOMS SUITES",
        link: "/rooms",
        dropdown: []
    },
    {
        id: 5,
        name: "NEWS",
        link: "/news",
        dropdown: []
    }
];


const footerNav = [
    {
        id: 1,
        name: "Home",
        icon: "ri-drag-move-line",
        link: "/",
    },
    {
        id: 2,
        icon: "ri-drag-move-line",
        name: "Rooms & Suites",
        link: "/rooms",
    },
    {
        id: 3,
        icon: "ri-drag-move-line",
        name: "Spa & Wellness",
        link: "/spa",
    },
    {
        id: 4,
        icon: "ri-drag-move-line",
        name: "Contact",
        link: "/contact",
    },
    {
        id: 5,
        icon: "ri-drag-move-line",
        name: "About Hotel",
        link: "/about",
    },
    {
        id: 6,
        icon: "ri-drag-move-line",
        name: "Contact",
        link: "/contact",
    },
];


export { navbarNav, footerNav }