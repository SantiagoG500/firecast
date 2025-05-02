import { Card, CardBody } from '@heroui/card';
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/table';

import { type ClimateData, ColumnClimateDataTable } from '@/types';

interface ClimaticDataCardProps {
  selectedMonthId: string
  changeCurrentMonth: (val: string) => void
  columns: ColumnClimateDataTable[]
  climaticData: ClimateData[]
}

export function ClimaticDataCard({selectedMonthId, climaticData, columns, changeCurrentMonth}: ClimaticDataCardProps) {

  const formatCell = (obj: any, key: string | number) => {
    const value = getKeyValue(obj, key)
    
    if (typeof value === 'number') {
      return value.toFixed(3)
    }

    return value
  }

  return (
    <Card className='col-span-2'>
      <CardBody>
        <Table
          selectedKeys={[selectedMonthId]}
          selectionMode='single'
          onSelectionChange={(key) => {
            const selectedMonth = Array.from(key)[0] as string

            changeCurrentMonth(selectedMonth)
          }}
        >
          <TableHeader>
            {columns.map(col => 
                <TableColumn key={col.key}>{col.label}</TableColumn>
              )}
          </TableHeader>
          <TableBody>
            {climaticData.map((row) =>
              <TableRow key={row.mes} >
                {(columnKey) => <TableCell>{formatCell(row, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardBody>
  </Card> 
  )
}