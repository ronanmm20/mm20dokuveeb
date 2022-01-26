const cviSidebar = [
    { text: "cvi", link: "/cvi/" },
    { text: "briif", link: "/cvi/brief" },
    { text: "moodboard", link: "/cvi/moodboard" },
]
const logiSidebar = [
    { text: "logi", link: "/logi/" },
    { text: "Fonditöötlus", link: "/logi/01_fontedit" }
]

module.exports = {
    title: "Minu dokuveeb",
    themeConfig: {
        nav: [
            { text: "Esileht", link: "/" },
            { text: "Minust", link: "/minust/" },
            { text: "Logi", link: "/logi/" },
            { text: "CVI", link: "/cvi/" },
        ],
        sidebar:
        {
            "/cvi/": cviSidebar,
            "/cvi/brief": cviSidebar,
            "/logi/": logiSidebar,
            "/logi/01_fontedit": logiSidebar,
        },
    }
};