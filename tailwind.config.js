/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "about.html", "services.html", "contact.html"],
  theme: {
    extend: {
      colors: {
        LightCyan: "#f6f8fa",
        NeonGreen: "hsl(150, 100%, 66%)",
        GrayishBlue: "hsl(217, 19%, 38%)",
        DarkGrayishBlue: "hsl(217, 19%, 24%)",
        DarkBlue: "hsl(218, 23%, 16%)",
        primary: "#615CFD",
        contact: "#D465EF",
        bgProject: "#001D38",
        project: "#dceaf5",
        footer: '#C7C7C7',
      },
      fontFamily: {
        mulish: "Mulish",
      },
      fontSize: {
        logo: ["34px", "24px"],
      },
      width: {
        mid: "35rem",
      },
    },
  },
  plugins: [],
};