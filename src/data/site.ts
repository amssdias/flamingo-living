import { url } from '../lib/paths';

export const site = {
  name: 'Flamingo Living',
  development: 'Ciudad Flamingo',
  region: 'Falcón, Venezuela',
  /** When false, plot maps hide sold/reserved states and ask visitors to contact an advisor. */
  showAvailability: true,
};

export interface NavItem {
  href: string;
  label: string;
}

export const nav: NavItem[] = [
  { href: url('/'), label: 'Inicio' },
  { href: url('/proyectos/'), label: 'Proyectos' },
  { href: url('/avances/'), label: 'Avances' },
  { href: url('/contacto/'), label: 'Contacto' },
];

export const contact = {
  whatsapp: { label: '+58 412 000 00 00', href: 'https://wa.me/584120000000' },
  email: { label: 'hola@flamingoliving.com', href: 'mailto:hola@flamingoliving.com' },
  phone: { label: '+58 268 000 00 00', href: 'tel:+582680000000' },
};

export const social = [
  { label: 'Instagram', icon: 'instagram-logo', href: 'https://instagram.com' },
  { label: 'Facebook', icon: 'facebook-logo', href: 'https://facebook.com' },
  { label: 'WhatsApp', icon: 'whatsapp-logo', href: contact.whatsapp.href },
];

export const legalLinks: NavItem[] = [
  { href: '#privacidad', label: 'Política de privacidad' },
  { href: '#aviso-legal', label: 'Aviso legal' },
];

export const plotSizes = [230, 250, 280, 300, 320] as const;

export const plotSizeNotes: Record<(typeof plotSizes)[number], string> = {
  230: 'La parcela más compacta. Suficiente para una casa de playa de una o dos plantas.',
  250: 'Un poco más de espacio para terraza o un pequeño jardín.',
  280: 'El punto medio: vivienda familiar con zona exterior.',
  300: 'Espacio para una casa amplia y jardín.',
  320: 'La mayor superficie disponible en Ciudad Flamingo.',
};

export const interestReasons = [
  'Inversión',
  'Vivienda habitual',
  'Segunda residencia',
  'Vivienda vacacional',
  'Quiero más información',
];
