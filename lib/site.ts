export const SITE_URL = "https://qima-ten.vercel.app";
export const WHATSAPP_NUMBER = "201200713679";
export const whatsappLink = (msg?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
export const LEADS_KEY = "qima-leads";
