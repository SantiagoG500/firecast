import { Popover, PopoverContent, PopoverTrigger } from '@heroui/popover';

import { SolarQuestionCircleLineDuotone } from './icons';

export function DetailedValueTooltip({ probability }: { probability: number }) {
  return (
    <Popover placement="right">
      <PopoverTrigger>
          <div aria-label='see detailed value' className='text-primary-800 flex items-center justify-center hover:text-primary-700'>
            <SolarQuestionCircleLineDuotone height={'20px'} width={'20px'}/>
          </div>
      </PopoverTrigger>
      <PopoverContent>
        {probability * 100}%
      </PopoverContent>
    </Popover>
  )
}