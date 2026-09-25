import { url } from '../lib/paths';
import { photos, type Photo } from './photos';

export type IslaStatus = 'comercializacion' | 'preventa' | 'proximamente';

export const islaStatusLabel: Record<IslaStatus, string> = {
  comercializacion: 'En comercialización',
  preventa: 'Preventa',
  proximamente: 'Próximamente',
};

export interface IslaFeature {
  icon: string;
  label: string;
}

export interface Isla {
  slug: string;
  numeral: string;
  name: string;
  status: IslaStatus;
  sizes: number[];
  summary: string;
  intro: string;
  location: string;
  features: IslaFeature[];
  cover: Photo;
  hero: Photo;
  gallery: [Photo, Photo, Photo];
  /** Official plot plan; the detail page shows a placeholder until it is provided. */
  plan?: { src: string; alt: string };
}

const defineIsla = (numeral: string, isla: Omit<Isla, 'slug' | 'numeral' | 'name'>): Isla => ({
  slug: `isla-${numeral.toLowerCase()}`,
  numeral,
  name: `ISLA ${numeral}`,
  ...isla,
});

export const islas: Isla[] = [
  defineIsla('I', {
    status: 'comercializacion',
    sizes: [230, 250, 280],
    summary: 'La primera fase, junto al acceso principal y con las primeras calles ya trazadas.',
    intro: 'ISLA I abre Ciudad Flamingo: parcelas compactas junto al acceso principal, pensadas para empezar a construir pronto.',
    location: 'Ocupa el frente sur del desarrollo, junto al acceso principal, y conecta con ISLA II por la calle central.',
    features: [
      { icon: 'road-horizon', label: 'Acceso directo desde la vía principal' },
      { icon: 'lightning', label: 'Previsión de agua y electricidad' },
      { icon: 'tree', label: 'Áreas verdes comunes' },
      { icon: 'signpost', label: 'Frente a calle interna' },
    ],
    cover: photos.seaside,
    hero: photos.islaView1,
    gallery: [photos.seaside, photos.works4, photos.terrain],
  }),
  defineIsla('II', {
    status: 'preventa',
    sizes: [250, 280, 300, 320],
    summary: 'Parcelas amplias en la zona central, pensadas para casas familiares.',
    intro: 'ISLA II reúne parcelas amplias en el corazón del desarrollo, con espacio para una casa familiar y jardín propio.',
    location: 'Se sitúa en el centro de Ciudad Flamingo, entre el acceso principal y las fases más cercanas a la costa.',
    features: [
      { icon: 'house-line', label: 'Espacio para vivienda con jardín' },
      { icon: 'lightning', label: 'Previsión de agua y electricidad' },
      { icon: 'path', label: 'Calles internas arboladas' },
      { icon: 'users-three', label: 'Zona comunitaria cercana' },
    ],
    cover: photos.islaView2,
    hero: photos.islaView3,
    gallery: [photos.islaView2, photos.works3, photos.accessRoad],
  }),
  defineIsla('III', {
    status: 'proximamente',
    sizes: [230, 250, 280, 300],
    summary: 'Una fase abierta hacia las áreas verdes, ideal para segunda residencia.',
    intro: 'ISLA III se abre hacia las áreas verdes del desarrollo, una opción tranquila para una segunda residencia.',
    location: 'Se ubica al oeste del desarrollo, junto a las áreas verdes y con salida directa hacia la costa.',
    features: [
      { icon: 'tree', label: 'Junto a las áreas verdes' },
      { icon: 'sun-horizon', label: 'Orientación abierta' },
      { icon: 'lightning', label: 'Previsión de agua y electricidad' },
      { icon: 'bicycle', label: 'Recorridos peatonales' },
    ],
    cover: photos.naturalArea,
    hero: photos.islaView4,
    gallery: [photos.naturalArea, photos.works1, photos.falconLandscape],
  }),
  defineIsla('IV', {
    status: 'proximamente',
    sizes: [280, 300, 320],
    summary: 'La fase más próxima a la costa, con las parcelas de mayor superficie.',
    intro: 'ISLA IV será la fase más cercana al mar, con las parcelas de mayor superficie de Ciudad Flamingo.',
    location: 'Ocupa el frente norte, la zona de Ciudad Flamingo más próxima al Caribe.',
    features: [
      { icon: 'waves', label: 'La fase más cercana al mar' },
      { icon: 'ruler', label: 'Parcelas de 280 a 320 m²' },
      { icon: 'lightning', label: 'Previsión de agua y electricidad' },
      { icon: 'binoculars', label: 'Vistas abiertas' },
    ],
    cover: photos.shore,
    hero: photos.caribbeanHorizon,
    gallery: [photos.shore, photos.works5, photos.nearbyBeach],
  }),
];

export function sizeRange(isla: Isla): string {
  return `${isla.sizes[0]} a ${isla.sizes[isla.sizes.length - 1]} m²`;
}

export function islaUrl(isla: Isla): string {
  return url(`/proyectos/${isla.slug}/`);
}
