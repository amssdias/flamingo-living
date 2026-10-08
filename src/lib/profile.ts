import { url } from './paths';

/**
 * The home page asks visitors who they are and links to the projects list
 * with that profile as a query param; the list reads it back to preselect
 * its filter.
 */
export type Profile = 'inversor' | 'particular';

export const PROFILE_PARAM = 'perfil';

export const profileLabel: Record<Profile, string> = {
  inversor: 'Inversión',
  particular: 'Particulares',
};

export function profileHref(profile: Profile): string {
  return url(`/proyectos/?${PROFILE_PARAM}=${profile}`);
}
