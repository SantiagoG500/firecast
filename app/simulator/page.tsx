'use client'
import 'katex/dist/katex.min.css'


import AreaCharts from '@/components/AreaCharts';
import { useClimaticInfo } from '@/hooks/useClimaticInfo';
import { ClimaticOptionsCard } from '@/components/ClimaticOptionsCard';
import { ClimaticDataCard } from '@/components/ClimateDataCard';
import { ContextCard } from '@/components/ContextCard';


export default function SimulatorPage() {
  const { 
    ratiosData,
    funcData,
    interactionData,
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
          <AreaCharts
            funcData={funcData}
            interactionData={interactionData}
            ratiosData={ratiosData}
          />
        </div>

        <div className='flex flex-col w-full gap-4 mt-28 md:mt-16 md:w-4/5 md:grid grid-cols-2 grid-rows-[min-content, 1fr] '>
          <ClimaticOptionsCard
            changeCurrentMonth={changeCurrentMonth}
            monthData={monthData}
            months={months}
            selectedMonthId={selectedMonthId}
            updateMonthData={updateMonthData}
          />

          <ContextCard/>

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
