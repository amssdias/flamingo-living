import { photos, type Photo } from './photos';

export interface Avance {
  id: string;
  month: string;
  year: string;
  /** Project name, or 'General' for works that affect the whole development. */
  isla: string;
  phase: string;
  title: string;
  text: string;
  photos: [Photo, Photo, Photo, Photo];
}

export const GENERAL = 'General';

export const avances: Avance[] = [
  {
    id: 'a1',
    month: 'Septiembre',
    year: '2026',
    isla: GENERAL,
    phase: 'Urbanización',
    title: 'Trazado de las calles internas',
    text: 'Se completó el trazado de las vías internas y comenzó la compactación de la base de las calles.',
    photos: [photos.works2, photos.works1, photos.works3, photos.works5],
  },
  {
    id: 'a2',
    month: 'Agosto',
    year: '2026',
    isla: GENERAL,
    phase: 'Infraestructura',
    title: 'Canalizaciones de agua y electricidad',
    text: 'Instalación de las primeras canalizaciones subterráneas para los servicios de agua y electricidad.',
    photos: [photos.works6, photos.works3, photos.works4, photos.works1],
  },
  {
    id: 'a3',
    month: 'Julio',
    year: '2026',
    isla: GENERAL,
    phase: 'Preparación de terrenos',
    title: 'Limpieza y nivelación del terreno',
    text: 'Retirada de vegetación y nivelación del terreno para el replanteo de parcelas.',
    photos: [photos.works5, photos.works4, photos.works2, photos.works6],
  },
  {
    id: 'a4',
    month: 'Junio',
    year: '2026',
    isla: GENERAL,
    phase: 'Delimitación',
    title: 'Cerramiento perimetral del desarrollo',
    text: 'Delimitación del perímetro completo de Ciudad Flamingo y señalización del acceso principal.',
    photos: [photos.works4, photos.terrain, photos.works1, photos.works3],
  },
];
