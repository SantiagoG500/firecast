// components/AreaChart.tsx
'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ChartData,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

import { useChartOptions } from '@/hooks/useChartOptions'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

interface AreaChartProps {
  climaticData: ChartData<'line'>
}

export default function AreaChart({ climaticData }: AreaChartProps) {
  const { options } = useChartOptions()

  return (
    <Line data={climaticData} options={options} />
  )
}
