import {Card, CardHeader, CardBody} from "@heroui/card";


export default function PricingPage() {
  return (
    <div>
      <h1 className='text-center font-bold text-4xl'>Simulator</h1>

      <main className='bg-red-50 flex justify-center gap-5 flex-wrap mt-9bg-red-50'>
        <div className='flex flex-col gap-4 w-11/12 md:w-10/12 max-w-lg lg:max-w-96'>
          <Card>
            <CardHeader>ads</CardHeader>
            <CardBody>body</CardBody>
          </Card>
          <Card>
            <CardHeader>ads</CardHeader>
            <CardBody>body</CardBody>
          </Card>
        </div>
        <div className='flex flex-col gap-4 w-11/12 md:w-10/12 max-w-lg'>
          <Card>
            <CardHeader>ads</CardHeader>
            <CardBody>body</CardBody>
          </Card>
          <Card>
            <CardHeader>ads</CardHeader>
            <CardBody>body</CardBody>
          </Card>
        </div>
      </main>
    </div>
  );
}
