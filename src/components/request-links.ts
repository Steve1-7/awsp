export const AWSP_WHATSAPP_URL = "https://wa.me/27832539773";
export const AWSP_CONTACT_EMAIL = "info@awsp.co.za";

export function createRequestLinks(subject: string, message: string) {
  const whatsappParams = new URLSearchParams({ text: `${subject}\n\n${message}` });
  const emailParams = new URLSearchParams({ subject, body: message });

  return {
    whatsapp: `${AWSP_WHATSAPP_URL}?${whatsappParams.toString()}`,
    email: `mailto:${AWSP_CONTACT_EMAIL}?${emailParams.toString()}`,
  };
}