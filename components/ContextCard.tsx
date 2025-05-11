'use client'
import { Card, CardBody, CardHeader } from '@heroui/card';

import { SolarSun2BoldDuotone, SolarTemperatureBoldDuotone, SolarWaterdropBoldDuotone, SolarWindBoldDuotone } from './icons';



export function ContextCard() {
  
  return (
    <Card>
      <CardHeader className='font-bold justify-center'>
        Qué es cada valor?
      </CardHeader>
      <CardBody> 
        <ul className='pl-4 flex flex-col gap-2'>
          <li className='text-lg flex items-center font-bold gap-2 hover:text-danger transition-colors'>
            <SolarTemperatureBoldDuotone height={'1.5em'} width={'1.5em'}/>
            CT: <span className='font-medium'>Coeficiente de Temperatura</span>
          </li>
          <li className='text-lg flex items-center font-bold gap-2 hover:text-secondary transition-colors'>
            <SolarWaterdropBoldDuotone height={'1.5em'} width={'1.5em'}/>
            CH: <span className='font-medium'>Coeficiente de humedad</span>
          </li>
          <li className='text-lg flex items-center font-bold gap-2 hover:text-success transition-colors'>
            <SolarWindBoldDuotone height={'1.5em'} width={'1.5em'}/>
            CV: <span className='font-medium'> Coeficiente de viento</span>
          </li>
          <li className='text-lg flex items-center font-bold gap-2 hover:text-warning transition-colors'>
            <SolarSun2BoldDuotone height={'1.5em'} width={'1.5em'}/>
            CS: <span className='font-medium'>Coeficiente de Sequedad</span>
          </li>
        </ul>
      </CardBody>
    </Card> 
  )
}