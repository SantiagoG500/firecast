import { ClimateData } from '@/types';

export function recalcValues(data: ClimateData): ClimateData {
  const interaccion_temp_viento = data.CT * data.CV;
  const interaccion_temp_sequedad = data.CT * data.CS;
  const coeficiente_total = data.CT + data.CH + data.CV + data.CS +
    interaccion_temp_viento + interaccion_temp_sequedad;

  const tasa_de_cambio = coeficiente_total * (0.8 * interaccion_temp_viento) + (0.9 * interaccion_temp_sequedad);
  const funcion_logistica_aplicada = 1 / (1 + Math.pow(2.71828, (-5 * (((tasa_de_cambio * 0.5) + 0.1) - 1.29))));

  return {
    ...data,

    interaccion_temp_viento,
    interaccion_temp_sequedad,
    coeficiente_total,
    tasa_de_cambio,
    funcion_logistica_aplicada,
  };
}