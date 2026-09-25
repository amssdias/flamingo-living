import type { Isla } from './islas';

export type PlotStatus = 'disponible' | 'reservada' | 'vendida' | 'proximamente';

export const plotStatusLabel: Record<PlotStatus, string> = {
  disponible: 'Disponible',
  reservada: 'Reservada',
  vendida: 'Vendida',
  proximamente: 'Próximamente',
};

export interface Plot {
  id: string;
  number: string;
  size: number;
  status: PlotStatus;
}

const PLOTS_PER_ISLA = 36;

/**
 * Sample availability taken from the design. Deterministic so every build
 * renders the same map; to be replaced by the CRM feed.
 */
export function getSamplePlots(isla: Isla, islaIndex: number): Plot[] {
  const upcoming = isla.status === 'proximamente';

  return Array.from({ length: PLOTS_PER_ISLA }, (_, i) => {
    const number = String(i + 1).padStart(2, '0');
    const hash = (i * 37 + islaIndex * 11 + (i % 5) * 3) % 10;
    const status: PlotStatus = upcoming
      ? 'proximamente'
      : hash < 6
        ? 'disponible'
        : hash < 8
          ? 'reservada'
          : 'vendida';

    return {
      id: `${isla.numeral}-${number}`,
      number,
      size: isla.sizes[(i * 5 + islaIndex) % isla.sizes.length],
      status,
    };
  });
}
