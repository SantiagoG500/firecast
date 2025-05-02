import { Card, CardBody, CardHeader } from '@heroui/card';
import { Select, SelectItem } from '@heroui/select';
import { NumberInput } from '@heroui/number-input';

import { ClimateData } from '@/types';

interface ClimaticOptionsCardProps {
  months: string[]
  selectedMonthId: string

  monthData: ClimateData

  changeCurrentMonth: (val: string) => void
  updateMonthData: ({coefficient, value}: {coefficient: keyof ClimateData, value: number}) => void
}

export function ClimaticOptionsCard({months, selectedMonthId, monthData, changeCurrentMonth, updateMonthData}: ClimaticOptionsCardProps) {
  
  return (
    <Card>
      <CardHeader>
          <Select
            className='block font-bold'
            label='mes'
            placeholder='Selecciona una fecha'
            selectedKeys={[selectedMonthId]}
            size='lg'
            variant='faded'
            
            onSelectionChange={(val) => {
              const newMonth = Array.from(val)[0] as string

              changeCurrentMonth(newMonth)
            }}
          >
            {months.map((month) => <SelectItem key={month}>{month}</SelectItem>)}
          </Select>
      </CardHeader>
      <CardBody> 
        <div className="">
          <div className='flex justify-around flex-wrap gap-2'>
            <NumberInput
              className='w-5/12'
              label='CT'
              placeholder='0.05'
              step={0.1}

              value={monthData.CT}

              onValueChange={(val) => {
                updateMonthData({coefficient: 'CT', value: val})
              }}
            />
            <NumberInput
              className='w-5/12'
              label='CH'
              placeholder='0.12'
              step={0.1}

              value={monthData.CH}


              onValueChange={(val) => {
                updateMonthData({coefficient: 'CH', value: val})
              }}
            />
            <NumberInput
              className='w-5/12'
              label='CV'
              placeholder='0.07'
              step={0.1}

              value={monthData.CV}

              onValueChange={(val) => {
                updateMonthData({coefficient: 'CV', value: val})
                
              }}
            />
            <NumberInput
              className='w-5/12'
              label='CS'
              placeholder='0.69'
              step={0.1}

              value={monthData.CS}

              onValueChange={(val) => {
                updateMonthData({coefficient: 'CV', value: val})
              }}
            />
          </div>
        </div>
      </CardBody>
    </Card> 
  ) 
}