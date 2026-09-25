import type { Photo } from '../data/photos';

const UTM = 'utm_source=flamingo_living&utm_medium=referral';
const WIDTHS = [480, 800, 1200, 1600, 2000];

export function photoUrl(photo: Photo, width: number): string {
  return `https://images.unsplash.com/photo-${photo.unsplashId}?auto=format&fit=crop&w=${width}&q=80`;
}

export function photoSrcset(photo: Photo): string {
  return WIDTHS.map((w) => `${photoUrl(photo, w)} ${w}w`).join(', ');
}

export function authorUrl(photo: Photo): string {
  return `https://unsplash.com/@${photo.username}?${UTM}`;
}

export const UNSPLASH_URL = `https://unsplash.com/?${UTM}`;
