'use client'

import { Card, CardBody, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'
import { Slider } from '@heroui/slider'
import { useEffect, useState } from 'react'

import { ClimateData } from '@/types'
import { recalcValues } from '@/utils/simulator'
import { title } from "@/components/primitives";
import { useClimaticInfo } from '@/hooks/useClimaticInfo'

type handleClimateValuesProps = {
  key: keyof ClimateData,
  value: number
}
const COLOR_CASES = {
  level1: 'level1',
  level2: 'level2',
  level3: 'level3',
  level4: 'level4',
  level5: 'level5',
  level6: 'level6',
  level7: 'level7',
} as const

type COLOR_CASES = typeof COLOR_CASES[keyof typeof COLOR_CASES]

export default function LogisticFunction() {
  const { climaticData } = useClimaticInfo()
  const [ initialValues, setInitialValues ] = useState<ClimateData>(recalcValues(climaticData[0]))
  const probability = initialValues.funcion_logistica_aplicada * 100
  const [ titleColor, setTitleColor ] = useState<COLOR_CASES>('level1')

    useEffect( () => {

    if (probability >= 0 && probability < 10) setTitleColor('level1')
    else if (probability >= 10 && probability < 25) setTitleColor('level2')
    else if (probability >= 25 && probability < 40) setTitleColor('level3')
    else if (probability >= 40 && probability < 55) setTitleColor('level4')
    else if (probability >= 55 && probability < 70) setTitleColor('level5')
    else if (probability >= 70 && probability < 85) setTitleColor('level6')
    else if (probability >= 85) setTitleColor('level7')

  }, [initialValues.funcion_logistica_aplicada, probability] )

  const handleValues = ({key, value}: handleClimateValuesProps) => {
    const newValues = recalcValues({
      ... initialValues,
      [key]: value
    })

    setInitialValues(newValues)
  }

  return (
    <div>
      <Card className='p-4'>
        <CardHeader>
          <div>
            <h2 className='text-xl font-bold'>Simulador de probabilidad</h2>
            <p className='text-default-600 text-base'>Pon a prueba nuestra función logística</p>
          </div>
        </CardHeader>
        <Divider className='my-3'/>
        <CardBody>
          <div className='grid gap-4 md:grid-cols-2'>
            <div>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-lg font-bold'>Parámetros</h2>
              </div>

              <div className='flex flex-col gap-2'>
                <Slider
                  color='danger'
                  label='CT'
                  maxValue={1}
                  minValue={0}
                  showSteps={true}
                  size='lg'
                  step={0.1}
                  value={initialValues.CT}
                  onChange={(val) => handleValues({key: 'CT', value: val as number})}
                />
                <Slider
                  color='secondary'
                  label='CH'
                  maxValue={1}
                  minValue={0}
                  showSteps={true}
                  size='lg'
                  step={0.1}
                  value={initialValues.CH}
                  onChange={(val) => handleValues({key: 'CH', value: val as number})}
                />
                <Slider
                  color='success'
                  label='CV'
                  maxValue={1}
                  minValue={0}
                  showSteps={true}
                  size='lg'
                  step={0.1}
                  value={initialValues.CV}
                  onChange={(val) => handleValues({key: 'CV', value: val as number})}
                />
                <Slider
                  color='warning'
                  label='CS'
                  maxValue={1}
                  minValue={0}
                  showSteps={true}
                  size='lg'
                  step={0.1}
                  value={initialValues.CS}
                  onChange={(val) => handleValues({key: 'CS', value: val as number})}
                />
              </div>
            </div>
            <div className='order-first md:order-last md:flex md:items-center md:justify-center'>
              <div className='flex flex-col items-center gap-4'>
                <p className={ title({ color: titleColor, size: 'lg',  className: 'transition-colors duration-500 ease-in-out' }) }>Probabilidad</p>
                <p className={ title({ color: titleColor, size: 'lg',  className: 'transition-colors duration-500 ease-in-out' }) }>{probability.toFixed(2)}%</p>
              </div>  
            </div>
          </div>
        </CardBody>

      </Card>
    </div>
  ) 
}