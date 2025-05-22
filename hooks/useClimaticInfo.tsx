import { useMemo, useState } from 'react';
import { ChartData } from 'chart.js';

import climateDataJSON from "@/mocks/climaticData.json";
import { ClimateData } from '@/types';
import { recalcValues } from '@/utils/simulator';

export function useClimaticInfo() {    
    const initialData = climateDataJSON.climatic_data.map(climaticData => {
      const newNada = recalcValues(climaticData)

      return {
        ...newNada,
        funcion_logistica_aplicada: (newNada.funcion_logistica_aplicada) * 100
      }
    })
    const months = climateDataJSON.climatic_data.map((val) => val.mes)
    const chartLabels = months.map((month) => month.substring(0,3))  

    const [climaticData, setClimaticData] = useState<ClimateData[]>(initialData)
    const [selectedMonthId, setSelectedMonthId] = useState(months[0])

    const monthData = useMemo( () => 
      climaticData.find(data => data.mes === selectedMonthId) || climaticData[0],
      [climaticData, selectedMonthId]
    )

    const columns = Object.entries(climaticData[0])
      .map(val => ({
        key: val[0],
        label: val[0].replace(/_/g, ' ')
    }))

  const climaticRatios = [
    {
      label: 'CT',
      data: climaticData.map(month => (month.CT)),
      fill: true,
      pointBackgroundColor: 'hsl(11, 94%, 75%)',
      borderColor: 'hsl(11, 94%, 75%)',
      backgroundColor: 'hsla(11, 94%, 75%, 0.1)',
    },
    {
      label: 'CH',
      data: climaticData.map(month => (month.CH)),
      fill: true,
      backgroundColor: 'hsl(206, 45%, 57%, 0.1)',  
      borderColor: 'hsl(206, 45%, 57%)',
      pointBackgroundColor: 'hsl(206, 45%, 57%)'
    },
    {
      label: 'CV',
      data: climaticData.map(month => (month.CV)),
      fill: true,
      backgroundColor: 'hsla(91, 27%, 62%, 0.1)',
      borderColor: 'hsl(91, 27%, 62%)',
      pointBackgroundColor: 'hsl(91, 27%, 62%)',
    },
    {
      label: 'CS',
      data: climaticData.map(month => (month.CS)),
      fill: true,
      backgroundColor: 'hsla(44, 100%, 66%, 0.1)',
      borderColor: 'hsl(44, 100%, 66%)',
      pointBackgroundColor: 'hsl(44, 100%, 66%)',
    },
  ]

  const dataInteractions = [
    {
      label: 'temp y viento',
      data: climaticData.map(month => (month.interaccion_temp_viento)),
      fill: true,
      backgroundColor: 'hsla(330, 53%, 66%, 0.1)',
      pointBackgroundColor: 'hsl(330, 53%, 66%)',
      borderColor: 'hsl(330, 53%, 66%)',
    },
    {
      label: 'temp y Sequedad',
      data: climaticData.map(month => (month.interaccion_temp_sequedad)),
      fill: true,
      backgroundColor: 'hsl(206, 45%, 57%, 0.1)',
      borderColor: 'hsl(206, 45%, 57%)',
      pointBackgroundColor: 'hsl(206, 45%, 57%)',
    },
    {
      label: 'Coe. total',
      data: climaticData.map(month => (month.coeficiente_total)),
      fill: true,
      backgroundColor: 'hsl(255, 30%, 87%, 0.1)',
      borderColor: 'hsl(255, 30%, 87%)',
      pointBackgroundColor: 'hsl(255, 30%, 87%)',
    },
    {
      label: 'k',
      data: climaticData.map(month => (month.tasa_de_cambio)),
      fill: true,
      pointBackgroundColor: 'hsl(11, 94%, 75%)',
      borderColor: 'hsl(11, 94%, 75%)',
      backgroundColor: 'hsla(11, 94%, 75%, 0.1)',
    },
  ]

  const dataFunc = [
    {
      label: 'f. logistica',
      data: climaticData.map(month => (month.funcion_logistica_aplicada)),
      fill: true,
      backgroundColor: 'hsl(199, 95%, 74%, 0.1)',
      borderColor: 'hsl(199, 95%, 74%)',
      pointBackgroundColor: 'hsl(199, 95%, 74%)',
    },
  ]

    const ratiosData: ChartData<'line'> = {
      labels: chartLabels,
      datasets: climaticRatios,
    }
    const interactionData: ChartData<'line'> = {
      labels: chartLabels,
      datasets: dataInteractions,
    }
    const funcData: ChartData<'line'> = {
      labels: chartLabels,
      datasets: dataFunc,
    }

  const changeCurrentMonth = (selectedMonth: string) => {
    if (selectedMonth === selectedMonthId) return
    setSelectedMonthId(selectedMonth)
  }

  const updateMonthData = ({coefficient, value}: {coefficient: keyof ClimateData, value: number}) => {
    if ( !(coefficient in monthData) ) return 

    const updateMonthData = {
      ...monthData,
      [coefficient]: value
    }

    const fullyUpdatedData = recalcValues(updateMonthData)

    setClimaticData(prevData => 
      prevData.map(month =>
        month.mes === selectedMonthId ? fullyUpdatedData : month
      )
    )
  }


  return {
    months,
    columns,
    climaticData,
    
    climaticRatios,
    dataInteractions,
    dataFunc,
    chartLabels,
    monthData,
    
    selectedMonthId,

    ratiosData,
    interactionData,
    funcData,

    changeCurrentMonth,
    updateMonthData
  }
}
