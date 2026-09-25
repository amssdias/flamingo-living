import { url } from './paths';

/**
 * Every lead CTA links to the contact page with its origin and any known
 * interest as query params; the contact form reads them back to prefill
 * fields and fill the hidden HubSpot properties.
 */
export interface LeadContext {
  source: string;
  isla?: string;
  size?: number | string;
  plot?: string;
  motivo?: string;
}

export const LEAD_PARAMS = {
  source: 'origen',
  isla: 'isla',
  size: 'tamano',
  plot: 'parcela',
  motivo: 'motivo',
} as const satisfies Record<keyof LeadContext, string>;

export function leadHref(context: LeadContext): string {
  const params = new URLSearchParams();
  for (const [key, param] of Object.entries(LEAD_PARAMS)) {
    const value = context[key as keyof LeadContext];
    if (value !== undefined && value !== '') params.set(param, String(value));
  }
  return url(`/contacto/?${params}`);
}
