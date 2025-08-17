// src/constants/menuItem.js
export const menuItem = [
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
                id: 22,
                name: "Team",
                link: "/team"
            },
            {
                id: 23,
                name: "Gallery",
                link: "/gallery"
            },
            {
                id: 24,
                name: "About",
                link: "/about"
            },
            {
                id: 26, // ✅ был дубликат id: 24
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
                name: "Gallery",
                link: "/gallery"
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
