'use client'
import { Card, CardBody, CardHeader } from '@heroui/card';
import { ScrollShadow } from '@heroui/scroll-shadow';

import { SolarCalculatorBoldDuotone, SolarFireSquareBoldDuotone, SolarSun2BoldDuotone, SolarTemperatureBoldDuotone, SolarWaterdropBoldDuotone, SolarWindBoldDuotone } from './icons';



export function ContextCard() {
  
  return (
    <Card>
      <CardHeader className='font-bold justify-center'>
        Qué es cada valor?
      </CardHeader>
      <CardBody> 
        <ScrollShadow className='h-44'>
          <ul className='pl-4 flex flex-col gap-2 h-min'>
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
            <li className='text-lg flex items-center font-bold gap-2 hover:text-[#dd7fae] transition-colors'>
              <span className='flex gap-1'>
                <SolarTemperatureBoldDuotone height={'1.5em'} width={'1.5em'}/> &amp;
                <SolarWindBoldDuotone height={'1.5em'} width={'1.5em'}/>:
              </span>
              <span className='font-medium'>Interacción temp. viento</span>
            </li>
            <li className='text-lg flex items-center font-bold gap-2 hover:text-[#6098C3] transition-colors'>
              <span className='flex gap-1'>
                <SolarTemperatureBoldDuotone height={'1.5em'} width={'1.5em'}/> &amp;
                <SolarSun2BoldDuotone height={'1.5em'} width={'1.5em'}/>:
              </span>
              <span className='font-medium'>Interacción temp. viento</span>
            </li>
            <li className='text-lg flex items-center font-bold gap-2 hover:text-[#D9D4E8] transition-colors'>
                <SolarCalculatorBoldDuotone height={'1.5em'} width={'1.5em'}/>:
                <span className='font-medium'>Coeficiente total</span>
            </li>
            <li className='text-lg flex items-center font-bold gap-2 hover:text-[#7ED4FC] transition-colors'>
                <SolarFireSquareBoldDuotone height={'1.5em'} width={'1.5em'}/>:
                <span className='font-medium'>Función logística</span>
            </li>
          </ul>
        </ScrollShadow>
      </CardBody>
    </Card> 
  )
}