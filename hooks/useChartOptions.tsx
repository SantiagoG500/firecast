import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const initialOptions = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#1f2937',
        font: {
          size: 14,
          weight: 'bold' as const,
        },
      },
    },
    title: {
      display: true,
      text: 'coeficientes de temperatura',
      color: 'fc9581',
      font: {
        size: 18,
        weight: 'bold' as const,
      },
    },
    tooltip: {
      backgroundColor: '#1f2937',
      titleColor: '#facc15',
      bodyColor: '#f3f4f6',
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


export function useChartOptions() {
  const { resolvedTheme } = useTheme()
  const [options, setOptions] = useState(initialOptions)

  useEffect(() => {
    const isDark = resolvedTheme === 'dark'

    const newOptions = {
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
          text: 'Coeficientes climáticos',
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

    setOptions(newOptions)
  }, [resolvedTheme])

  return {options}
}