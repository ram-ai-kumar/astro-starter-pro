import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Astro Starter Pro",
  description:
    "Starter template optimized for SEO and performance. A solid foundation to start your projects with best practices.",
  url: "https://astrostarterpro.com",
  lang: "en",
  locale: "en_US",
  author: "Ram-AI-Kumar",
  twitter: "@Ram-AI-Kumar",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
    { text: "Widgets", href: "/widgets" },
  ],
};
