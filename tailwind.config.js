/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "about.html",
    "services.html",
    "contact.html",
    "projects.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#615CFD",
        contact: "#D465EF",
        bgProject: "#001D38",
        project: "#e0dcf566",
        footer: "#C7C7C7",
        welcome: "#844ce3",
        lightBlack: "#000000f2",
        shaddow: "rgb(22 226 141)",
      },
      fontFamily: {
        mulish: "Mulish",
      },
      fontSize: {
        logo: ["34px", "15px"],
      },
      width: {
        mid: "35rem",
      },
      backgroundImage: {
        preload: "url('/images/preloader.gif')",
      },
      dropShadow: {
        "3xl": "5px 5px 3px rgb(22,226,141)",
      },
    },
  },
  plugins: [],
};
