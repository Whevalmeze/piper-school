"use client"
import { PieChart } from '@mui/x-charts/PieChart';
type Props = {}

const TeacherProfile = (props: Props) => {
  return (
    <div className='w-full rounded-lg border border-arapawa-100 p-3'>
      <h3 className='font-semibold text-xl'>Total Students </h3>
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Primary' },
            { id: 1, value: 15, label: 'Seconndary' },
            { id: 2, value: 20, label: 'Nursery' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    </div>
  )
}

export default TeacherProfile