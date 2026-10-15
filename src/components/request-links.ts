export const AWSP_WHATSAPP_URL = "https://wa.me/27832539773";
export const AWSP_CONTACT_EMAILS = [
  { label: "General enquiries", email: "info@awsp.co.za" },
  { label: "Accounts", email: "account@awsp.co.za" },
  { label: "Sales", email: "sales@awsp.co.za" },
] as const;
export const AWSP_CONTACT_EMAIL = AWSP_CONTACT_EMAILS[0].email;

export function createRequestLinks(subject: string, message: string) {
  const whatsappParams = new URLSearchParams({ text: `${subject}\n\n${message}` });
  const emailParams = new URLSearchParams({ subject, body: message });

  return {
    whatsapp: `${AWSP_WHATSAPP_URL}?${whatsappParams.toString()}`,
    email: `mailto:${AWSP_CONTACT_EMAIL}?${emailParams.toString()}`,
  };
}