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
import { Tab, Tabs } from '@heroui/tabs'

import { ChartKeys, ChartNames, useChartOptions } from '@/hooks/useChartOptions'


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
  ratiosData: ChartData<'line'>
  interactionData: ChartData<'line'>
  funcData: ChartData<'line'>
}


export default function AreaCharts({ ratiosData, interactionData, funcData }: AreaChartProps) {
  const { getChartOptions} = useChartOptions()

  return (
    <div className='flex flex-col w-full'>
      <Tabs
        aria-label='chart options'
        placement='bottom'
      >
        <Tab key={ChartKeys.RATIOS_DATA} title={ChartNames.RATIOS_DATA}>
          <div className='w-full h-72'>
            <Line data={ratiosData} options={getChartOptions(ChartNames.RATIOS_DATA)}/>
          </div>
        </Tab>
        <Tab key={ChartKeys.INTERACTIONS} title={ChartNames.INTERACTIONS}>
          <div className='w-full h-72'>
            <Line data={interactionData} options={getChartOptions(ChartNames.INTERACTIONS)}/>
          </div>
        </Tab>
        <Tab key={ChartKeys.LOGISTIC_FUNC} title={ChartNames.LOGISTIC_FUNC}>
          <div className='w-full h-72'>
            <Line data={funcData} options={getChartOptions(ChartNames.LOGISTIC_FUNC)}/>
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}
