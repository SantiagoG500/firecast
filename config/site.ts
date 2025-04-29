export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Firecast",
  description: "predicción inteligente para prevenir incendios forestales antes de que ocurran.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Simulator",
      href: "/simulator",
    },
  ],
  navMenuItems: [
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Simulator",
      href: "/simulator",
    },
  ],
  links: {
  },
};
