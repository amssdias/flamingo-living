import { url } from '../lib/paths';
import type { Profile } from '../lib/profile';
import { photos, type Photo } from './photos';

export type IslaStatus = 'vigente' | 'construccion' | 'revision';

export const islaStatusLabel: Record<IslaStatus, string> = {
  vigente: 'Vigente',
  construccion: 'En construcción',
  revision: 'Por revisar',
};

export interface IslaFeature {
  icon: string;
  label: string;
}

export interface IslaFact {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface Isla {
  slug: string;
  numeral: string;
  name: string;
  /** Who the project is aimed at; drives the tags and the filter on the projects list. */
  profiles: Profile[];
  status: IslaStatus;
  facts: IslaFact[];
  summary: string;
  intro: string;
  features: IslaFeature[];
  cover: Photo;
  hero: Photo;
  gallery: [Photo, Photo, Photo];
}

const referencePrice = (value: string): IslaFact => ({ label: 'Precio de referencia', value, highlight: true });

const definitions: Omit<Isla, 'numeral'>[] = [
  {
    slug: 'las-islas',
    name: 'Las Islas',
    profiles: ['inversor'],
    status: 'vigente',
    facts: [
      { label: 'Parcelas', value: '10' },
      { label: 'Superficie por parcela', value: '2.500 m²' },
      { label: 'Ubicación', value: 'Entre calles E y D' },
      referencePrice('100 $/m²'),
    ],
    summary: 'Diez parcelas de 2.500 m² para desarrollo hotelero, entre las calles E y D de Ciudad Flamingo.',
    intro: 'Las Islas reúne diez parcelas de 2.500 m² pensadas para hoteles, entre las calles E y D de Ciudad Flamingo.',
    features: [
      { icon: 'buildings', label: 'Suelo destinado a hoteles' },
      { icon: 'map-pin', label: 'Entre las calles E y D de Ciudad Flamingo' },
    ],
    cover: photos.seaside,
    hero: photos.islaView1,
    gallery: [photos.seaside, photos.works4, photos.terrain],
  },
  {
    slug: 'aqua-mundo',
    name: 'Aqua Mundo',
    profiles: ['inversor'],
    status: 'vigente',
    facts: [
      { label: 'Situación', value: 'Parque construido, sin operar' },
      { label: 'Se buscan', value: 'Socios' },
      { label: 'Objetivo', value: 'Puesta en funcionamiento' },
    ],
    summary: 'Un parque ya construido que busca socios para ponerse en funcionamiento.',
    intro: 'Aqua Mundo es un parque que ya existe pero no está en funcionamiento: buscamos socios para ponerlo en marcha.',
    features: [
      { icon: 'swimming-pool', label: 'Instalaciones ya existentes' },
      { icon: 'handshake', label: 'Proyecto abierto a nuevos socios' },
    ],
    cover: photos.falconBeach,
    hero: photos.aerialView,
    gallery: [photos.falconBeach, photos.coastline, photos.nearbyBeach],
  },
  {
    slug: 'el-parque',
    name: 'El Parque',
    profiles: ['inversor'],
    status: 'revision',
    facts: [
      { label: 'Parcelas', value: '2' },
      { label: 'Superficie por parcela', value: '2.900 m²' },
      { label: 'Capacidad estimada', value: '54 apartamentos' },
      referencePrice('50 $/m²'),
    ],
    summary: 'Dos parcelas de 2.900 m² para desarrollo residencial, con capacidad estimada para 54 apartamentos.',
    intro: 'El Parque son dos parcelas de 2.900 m² destinadas a desarrollo familiar, con una capacidad estimada de 54 apartamentos.',
    features: [
      { icon: 'users-three', label: 'Parcelas destinadas a desarrollo familiar' },
      { icon: 'building-apartment', label: 'Pensadas para edificios de apartamentos' },
    ],
    cover: photos.islaView2,
    hero: photos.islaView3,
    gallery: [photos.islaView2, photos.works3, photos.accessRoad],
  },
  {
    slug: 'las-arenas',
    name: 'Las Arenas',
    profiles: ['particular', 'inversor'],
    status: 'construccion',
    facts: [
      { label: 'Superficie total', value: 'Hasta 9.800 m²' },
      { label: 'Parcelas', value: '40' },
      { label: 'Tamaños', value: '200 a 240 m²' },
      referencePrice('30 $/m²'),
    ],
    summary: '40 parcelas de 200 a 240 m² con agua, luz y servicios de urbanización, ya en construcción.',
    intro: 'Las Arenas está en proceso de construcción y urbanización: 40 parcelas de 200 a 240 m² con agua, luz y servicios.',
    features: [
      { icon: 'drop', label: 'Cuenta con agua' },
      { icon: 'lightning', label: 'Cuenta con luz' },
      { icon: 'road-horizon', label: 'Servicios de urbanización' },
      { icon: 'crane', label: 'En proceso de construcción y urbanización' },
    ],
    cover: photos.naturalArea,
    hero: photos.islaView4,
    gallery: [photos.naturalArea, photos.works1, photos.falconLandscape],
  },
  {
    slug: 'corazon-flamingo',
    name: 'Corazón Flamingo',
    profiles: ['particular', 'inversor'],
    status: 'vigente',
    facts: [
      { label: 'Superficie total', value: '300.000 m²' },
      { label: 'Parcelas', value: '1.000' },
      { label: 'Tamaños', value: '200 a 300 m²' },
      referencePrice('Consultar'),
    ],
    summary: '1.000 parcelas de 200 a 300 m² en una ubicación excelente, para familias e inversores.',
    intro: 'Corazón Flamingo ocupa 300.000 m² con 1.000 parcelas de 200 a 300 m², a elegir según conveniencia.',
    features: [
      { icon: 'users-three', label: 'Para familias, inversores y otros compradores' },
      { icon: 'map-pin', label: 'Excelente ubicación' },
      { icon: 'ruler', label: 'Tamaño de parcela según conveniencia' },
    ],
    cover: photos.shore,
    hero: photos.caribbeanHorizon,
    gallery: [photos.shore, photos.works5, photos.nearbyBeach],
  },
];

export const islas: Isla[] = definitions.map((isla, index) => ({
  ...isla,
  numeral: String(index + 1).padStart(2, '0'),
}));

export function islaUrl(isla: Isla): string {
  return url(`/proyectos/${isla.slug}/`);
}
