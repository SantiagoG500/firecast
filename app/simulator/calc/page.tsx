'use client'

import { Button } from '@heroui/button'
import { Card, CardBody, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'
import { Progress } from '@heroui/progress'
import { Slider } from '@heroui/slider'
import { Tab, Tabs } from '@heroui/tabs'
import { useState } from 'react'

import { ClimateData } from '@/types'
import { recalcValues } from '@/utils/simulator'
import { useClimaticInfo } from '@/hooks/useClimaticInfo'
import { SolarCalculatorBoldDuotone } from '@/components/icons'

type handleClimateValuesProps = {
  key: keyof ClimateData,
  value: number
}
export default function LogisticFunction() {
  const { climaticData } = useClimaticInfo()
  const [ initialValues, setInitialValues ] = useState<ClimateData>(recalcValues(climaticData[0]))

  const handleClimateValues = ({key, value}: handleClimateValuesProps) => {
    if (!(key in initialValues)) return
    
    setInitialValues(prev => {
      
      return {
        ...prev,
        [key]: value
      }
    })
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
                <Button
                 size='sm'
                 onPress={() => {
                    const newValues = recalcValues(initialValues)

                    setInitialValues(newValues)
                 }}
                >
                  Confirmar
                </Button>
              </div>

              <div>
                <Slider
                  color='danger'
                  label='CT'
                  maxValue={1}
                  minValue={0}
                  step={0.1}
                  value={initialValues.CT}
                  onChange={(val) => handleClimateValues({key: 'CT', value: val as number})}
                />
                <Slider
                  color='secondary'
                  label='CH'
                  maxValue={1}
                  minValue={0}
                  step={0.1}
                  value={initialValues.CH}
                  onChange={(val) => handleClimateValues({key: 'CH', value: val as number})}
                />
                <Slider
                  color='success'
                  label='CV'
                  maxValue={1}
                  minValue={0}
                  step={0.1}
                  value={initialValues.CV}
                  onChange={(val) => handleClimateValues({key: 'CV', value: val as number})}
                />
                <Slider
                  color='warning'
                  label='CS'
                  maxValue={1}
                  minValue={0}
                  step={0.1}
                  value={initialValues.CS}
                  onChange={(val) => handleClimateValues({key: 'CS', value: val as number})}
                />
              </div>
            </div>
            <div className='order-first md:order-last'>
              <Tabs
                aria-label='Probability options'
              >
                <Tab
                  key='logistic_func'
                  title={
                    <div className='flex items-center gap-2'>
                      <SolarCalculatorBoldDuotone height='1.7em' width='1.7em'/>
                      <span>Logística</span>
                    </div>
                  }
                >
                  <Progress
                    aria-label="Fire probability"
                    maxValue={1}
                    minValue={0}
                    showValueLabel={true}
                    size='lg'
                    value={initialValues.funcion_logistica_aplicada}
                  />
                </Tab>
              </Tabs>
            </div>
          </div>
        </CardBody>

      </Card>

    </div>
  ) 
}