import { Card, CardBody, CardHeader } from '@heroui/card';
import TeX from '@matejmazur/react-katex';

export function EcuationCard() {
  return (
    <Card>
      <CardHeader className='font-bold justify-center'>
        ecuación diferencial
      </CardHeader>
      <CardBody> 
        <div className='flex justify-center'>
          <TeX className='text-2xl' math={`p(r) = \\frac{1}{1+e^{-5*( ( K * 0.5 ) + 0.1) - 1.29} }`}/>
        </div>
        {/* <div className='bg-content2s mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolores eius fuga maxime nobis assumenda aut consequatur ea dolore reprehenderit.
        </div> */}
      </CardBody>
    </Card> 
    
  ) 
}