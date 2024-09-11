// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Soluciones", url: "/" },
      { name: "FAQs", url: "/" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Nosotros", url: "/" },
      { name: "Contactanos", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};