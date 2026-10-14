import { url } from '../lib/paths';
import type { Profile } from '../lib/profile';
import { photos, type Photo } from './photos';

export type IslaStatus = 'comercializacion' | 'socios' | 'proximamente' | 'construccion' | 'lista-interes';

export const islaStatusLabel: Record<IslaStatus, string> = {
  comercializacion: 'En comercialización',
  socios: 'Buscando socios inversores',
  proximamente: 'Próximamente',
  construccion: 'En construcción',
  'lista-interes': 'Lista de interés abierta',
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
  /** Label of the lead button; each project is pitched according to its commercial phase. */
  cta: string;
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
    status: 'comercializacion',
    facts: [
      { label: 'Superficie total', value: 'Más de 28.000 m²' },
      { label: 'Parcelas', value: '10' },
      { label: 'Superficie por parcela', value: '2.500 m² aprox.' },
      { label: 'Ubicación', value: 'Entre calles E y D' },
      referencePrice('Desde 100 USD/m²'),
    ],
    summary: 'Una oportunidad para desarrollar en un enclave costero: 10 parcelas de unos 2.500 m² para promotores e inversores.',
    intro:
      'Una oportunidad para desarrollar en un enclave costero con gran atractivo natural. Un proyecto de expansión compuesto por 10 parcelas de aproximadamente 2.500 m², concebido para promotores e inversores que buscan explorar nuevas posibilidades de desarrollo en el entorno de Flamingo. Precio de referencia orientativo, sujeto a confirmación.',
    features: [
      { icon: 'buildings', label: 'Suelo destinado a hoteles' },
      { icon: 'map-pin', label: 'Entre las calles E y D de Ciudad Flamingo' },
    ],
    cta: 'Solicitar información del proyecto',
    cover: photos.seaside,
    hero: photos.islaView1,
    gallery: [photos.seaside, photos.works4, photos.terrain],
  },
  {
    slug: 'aqua-mundo',
    name: 'Aquamundo',
    profiles: ['inversor'],
    status: 'socios',
    facts: [
      { label: 'Tipo', value: 'Ocio y turismo' },
      { label: 'Situación', value: 'Parque existente por reactivar' },
      { label: 'Se buscan', value: 'Socios inversores' },
    ],
    summary: 'Un parque acuático ya existente que busca socios inversores para su reactivación y puesta en marcha.',
    intro:
      'Una oportunidad para impulsar la recuperación y puesta en marcha de un parque acuático ya existente. Aquamundo aspira a convertirse en un activo estratégico para dinamizar el turismo, ampliar la oferta de ocio de la zona y acompañar el crecimiento de Ciudad Flamingo y su entorno costero.',
    features: [
      { icon: 'swimming-pool', label: 'Instalaciones ya existentes' },
      { icon: 'handshake', label: 'Proyecto abierto a nuevos socios' },
    ],
    cta: 'Presenta tu interés como inversor',
    cover: photos.falconBeach,
    hero: photos.aerialView,
    gallery: [photos.falconBeach, photos.coastline, photos.nearbyBeach],
  },
  {
    slug: 'el-parque',
    name: 'El Parque',
    profiles: ['inversor'],
    status: 'proximamente',
    facts: [
      { label: 'Parcelas', value: '2' },
      { label: 'Superficie por parcela', value: '2.900 m² aprox.' },
      { label: 'Capacidad estimada', value: '54 apartamentos' },
      referencePrice('50 USD/m²'),
    ],
    summary: 'Dos parcelas de unos 2.900 m² para desarrollo residencial, con capacidad estimada para 54 apartamentos.',
    intro:
      'Una oportunidad de desarrollo residencial con capacidad estimada para 54 apartamentos, distribuida en dos parcelas de aproximadamente 2.900 m² cada una. Un proyecto orientado a promotores que buscan participar en la expansión urbanística y residencial de la zona.',
    features: [
      { icon: 'users-three', label: 'Parcelas destinadas a desarrollo familiar' },
      { icon: 'building-apartment', label: 'Pensadas para edificios de apartamentos' },
    ],
    cta: 'Consultar oportunidad de desarrollo',
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
      referencePrice('30 USD/m²'),
    ],
    summary:
      '40 parcelas de 200 a 240 m² en un desarrollo en construcción, con agua, electricidad y servicios de urbanización.',
    intro:
      'Empieza a imaginar tu futuro en la costa venezolana. Las Arenas reúne 40 parcelas de entre 200 y 240 m² en un desarrollo residencial en construcción, con servicios de urbanización previstos en el proyecto. Un espacio para dar forma a tu hogar y crear un lugar propio para ti y tu familia.',
    features: [
      { icon: 'drop', label: 'Cuenta con agua' },
      { icon: 'lightning', label: 'Cuenta con luz' },
      { icon: 'road-horizon', label: 'Servicios de urbanización' },
      { icon: 'crane', label: 'En proceso de construcción y urbanización' },
    ],
    cta: 'Solicitar información',
    cover: photos.naturalArea,
    hero: photos.islaView4,
    gallery: [photos.naturalArea, photos.works1, photos.falconLandscape],
  },
  {
    slug: 'corazon-flamingo',
    name: 'Corazón de Flamingo',
    profiles: ['particular', 'inversor'],
    status: 'lista-interes',
    // No price on purpose: permits are pending, so nothing may suggest the plots are already for sale.
    facts: [
      { label: 'Superficie total', value: '300.000 m²' },
      { label: 'Parcelas previstas', value: '1.000' },
      { label: 'Tamaños', value: '200 a 300 m²' },
    ],
    summary: 'El proyecto residencial más ambicioso de Flamingo Living: 1.000 parcelas previstas de 200 a 300 m².',
    intro:
      'El proyecto residencial más ambicioso de Flamingo Living. Un desarrollo previsto de 1.000 parcelas de entre 200 y 300 m², en una ubicación privilegiada, pensado para familias que sueñan con construir su hogar e interesados en adquirir suelo. Estamos preparando su próxima etapa: regístrate en nuestra lista de interés para recibir novedades, información sobre el lanzamiento y acceso prioritario cuando se abra la comercialización.',
    features: [
      { icon: 'users-three', label: 'Para familias e interesados en adquirir suelo' },
      { icon: 'map-pin', label: 'Ubicación privilegiada' },
      { icon: 'clipboard-text', label: 'Proyecto en preparación, sujeto a las autorizaciones correspondientes' },
    ],
    cta: 'Unirme a la lista de interés',
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
