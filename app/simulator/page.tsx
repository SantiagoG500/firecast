'use client'
import 'katex/dist/katex.min.css'


import AreaChart from '@/components/AreaChart';
import { EcuationCard } from '@/components/EcuationCard';
import { useClimaticInfo } from '@/hooks/useClimaticInfo';
import { ClimaticOptionsCard } from '@/components/ClimaticOptionsCard';
import { ClimaticDataCard } from '@/components/ClimateDataCard';


export default function SimulatorPage() {
  const { 
    ratiosData,
    months,
    selectedMonthId,
    monthData,
    climaticData,
    columns,

    updateMonthData,
    changeCurrentMonth,
  } = useClimaticInfo()

  return (
    <div>
      <main className='flex flex-col items-center'>
        <div className='flex justify-center w-full max-w-md h-64 md:max-w-xl md:h-80'>
          <AreaChart climaticData={ratiosData} />
        </div>

        <div className=' w-full gap-4 md:w-4/5  flex flex-col md:grid grid-cols-2 grid-rows-[min-content, 1fr]  mt-14  '>
          <ClimaticOptionsCard
            changeCurrentMonth={changeCurrentMonth}
            monthData={monthData}
            months={months}
            selectedMonthId={selectedMonthId}
            updateMonthData={updateMonthData}
          />

          <EcuationCard/>

          <ClimaticDataCard
            changeCurrentMonth={changeCurrentMonth}
            climaticData={climaticData}
            columns={columns}
            selectedMonthId={selectedMonthId}
          />
        </div>
      </main>
    </div>
  );
}
