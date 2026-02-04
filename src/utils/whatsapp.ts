export const DEFAULT_WHATSAPP_PHONE = '5541997772066';
export const DEFAULT_WHATSAPP_TEXT =
  'Olá tudo bem? Tenho interesse em conhecer o VBSolution CRM solicito uma demonstração!';

export function getWhatsAppUrl(
  phone: string = DEFAULT_WHATSAPP_PHONE,
  text: string = DEFAULT_WHATSAPP_TEXT
): string {
  const encodedText = encodeURIComponent(text);
  return `https://api.whatsapp.com/send/?phone=${phone}&text=${encodedText}&type=phone_number&app_absent=0`;
}

export function openWhatsApp(
  phone: string = DEFAULT_WHATSAPP_PHONE,
  text: string = DEFAULT_WHATSAPP_TEXT
): void {
  const url = getWhatsAppUrl(phone, text);
  window.open(url, '_blank');
}
