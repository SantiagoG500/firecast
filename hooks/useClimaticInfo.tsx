import { useMemo, useState } from 'react';
import { ChartData } from 'chart.js';

import { climatic_data } from "@/mocks/climaticData.json";
import { ClimateData } from '@/types';
import { recalcValues } from '@/utils/simulator';

export function useClimaticInfo() {    
    const months = climatic_data.map((val) => val.mes)
    const chartLabels = months.map((month) => month.substring(0,3))  

    const [climaticData, setClimaticData] = useState(climatic_data)
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
        data: climaticData.map(month => (month.CT) ),
        fill: true,
        pointBackgroundColor: '#fc9581',
        borderColor: '#fc9581',
        backgroundColor: 'rgba(252, 149, 129, 0.1)',

      },
      {
        label: 'CH',
        data: climaticData.map(month => (month.CH) ),
        fill: true,
        backgroundColor: 'rgba(255, 210, 95, 0.1)',
        borderColor: '#ffd25f',
        pointBackgroundColor: '#ffd25f',
        
      },
      {
        label: 'CV',
        data: climaticData.map(month => (month.CV) ),
        fill: true,
        backgroundColor: 'rgba(157, 183, 135, 0.1)',
        borderColor: '#9db787',
        pointBackgroundColor: '#9db787',
      },
      {
        label: 'CS',
        data: climaticData.map(month => (month.CS) ),
        fill: true,
        backgroundColor: 'rgba(90, 132, 134, 0.1)',
        borderColor: '#5a8486',
        pointBackgroundColor: '#5a8486',

      },
    ]
    const dataInteractions = [
      {
        label: 'temp y viento',
        data: climaticData.map(month => (month.interaccion_temp_viento) ),
        fill: true,
        backgroundColor: 'rgba(132, 204, 145, 0.2)',
        borderColor: '#84CC91CC',
        pointBackgroundColor: '#84CC91CC',
      },
      {
        label: 'temp y Sequedad',
        data: climaticData.map(month => (month.interaccion_temp_sequedad) ),
        fill: true,
        backgroundColor: 'rgba(132, 204, 145, 0.2)',
        borderColor: '#84CC91CC',
        pointBackgroundColor: '#84CC91CC',
      },
    ]
    const dataFunc = [
      {
        label: 'Coe. total',
        data: climaticData.map(month => (month.coeficiente_total) ),
        fill: true,
        backgroundColor: 'rgba(132, 204, 145, 0.2)',
        borderColor: '#84CC91CC',
        pointBackgroundColor: '#84CC91CC',
      },
      {
        label: 'k',
        data: climaticData.map(month => (month.tasa_de_cambio) ),
        fill: true,
        backgroundColor: 'rgba(132, 204, 145, 0.2)',
        borderColor: '#84CC91CC',
        pointBackgroundColor: '#84CC91CC',
      },
      {
        label: 'f. logistica',
        data: climaticData.map(month => (month.funcion_logistica_aplicada) ),
        fill: true,
        backgroundColor: 'rgba(132, 204, 145, 0.2)',
        borderColor: '#84CC91CC',
        pointBackgroundColor: '#84CC91CC',
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
