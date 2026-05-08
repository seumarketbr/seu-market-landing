// Replace SEUNUMERO with the real Brazilian phone number (e.g. 5591999999999)
export const WHATSAPP_NUMBER = "SEUNUMERO";
export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre o Seu Market Br para o meu condomínio.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
