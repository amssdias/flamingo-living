const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefixes a root-relative path with the configured `base`, e.g. '/contacto/' → '/flamingo-living/contacto/'. */
export function url(path: string): string {
  return `${BASE}${path}`;
}
