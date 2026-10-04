export const navigationLinks = [
  { label: "Inicio", path: "/" },
  { label: "Premios", path: "/#premios" },
  { label: "Condiciones", path: "/condiciones" },
  { label: "Contacto", path: "/contacto" }
];

export const socialLinks = [
  { name: "Instagram", short: "IG", url: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/" },
  { name: "Facebook", short: "FB", url: import.meta.env.VITE_FACEBOOK_URL || "https://facebook.com/" },
  { name: "Telegram", short: "TG", url: import.meta.env.VITE_TELEGRAM_URL || "https://t.me/" }
];

export const prizeData = [
  {
    title: "Jackpot Dorado",
    amount: "$2.500.000",
    category: "PREMIO DESTACADO",
    icon: "♛"
  },
  {
    title: "Royal Spin",
    amount: "$850.000",
    category: "PREMIO SEMANAL",
    icon: "★"
  },
  {
    title: "Lucky Seven",
    amount: "$500.000",
    category: "PREMIO ESPECIAL",
    icon: "7"
  },
  {
    title: "Gold Bonus",
    amount: "$250.000",
    category: "BONUS",
    icon: "♦"
  }
];