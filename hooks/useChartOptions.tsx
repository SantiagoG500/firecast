import { useTheme } from 'next-themes'

export const ChartKeys = {
  RATIOS_DATA: "ratios_data",
  INTERACTIONS: "interactions",
  LOGISTIC_FUNC: "logistic_func",
} as const;

export const ChartNames = {
  RATIOS_DATA: "Coeficientes",
  INTERACTIONS: "Interacciones",
  LOGISTIC_FUNC: "Función logística",
} as const;

export type ChartMap = {
  [K in keyof typeof ChartKeys]: (typeof ChartNames)[K];
};

export function useChartOptions() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const getChartOptions = (chartTitle: string)  => {
    return {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        legend: {
          position: 'top' as const,
          labels: {
            color: isDark ? '#f3f4f6' : '#1f2937',
            font: {
              size: 14,
              weight: 'bold' as const,
            },
          },
        },
        title: {
          display: true,
          text: chartTitle,
          color: isDark ? '#f9fafb' : '#111827',
          font: {
            size: 18,
            weight: 'bold' as const,
          },
        },
        tooltip: {
          backgroundColor: isDark ? '#374151' : '#f9fafb',
          titleColor: isDark ? '#facc15' : '#111827',
          bodyColor: isDark ? '#e5e7eb' : '#1f2937',
          borderColor: '#3b82f6',
          borderWidth: 1,
          titleFont: {
            weight: 'bold' as const,
          },
        },
      },
      elements: {
        line: {
          tension: 0.4,
        },
      },
    }
  }

  return { getChartOptions }
}
