import { Contact, User, Users } from 'lucide-react'
import React, { ReactNode } from 'react'
import { DatePickerWithRange } from '../ui/datepicker'

type Props = {}
type CardProps = {
    title: string,
    value: number,
    icon: ReactNode,
}
type data = Array<CardProps>

const data: data = [
    {
        title: "Total Students",
        value: 4589,
        icon: <Users />,
    },
    {
        title: "Total Teachers",
        value: 34,
        icon: <User />,
    },
    {
        title: "Total Parents",
        value: 1454,
        icon: <Contact />,
    },
]

const Card = ({value, icon, title}: CardProps) => {
  return (
    <div className='flex p-6 min-w-fit border border-arapawa-100  rounded-lg items-center justify-center flex-col'>
        <div className='flex items-center gap-1 p-3'>
            {icon}
            <span className='text-2xl font-semibold'>{value}</span>
        </div>
        <span>{title}</span>
    </div> 
  )
}

const Overview = (props: Props) => {
  return (
    <div className='bg-white flex flex-col gap-5 min-w-fit border border-arapawa-100  rounded-lg p-3'>
        <div className='w-full flex justify-between'>
            <h3 className='text-xl font-semibold'>Overview</h3>
            <DatePickerWithRange className='hidden lg:block' />
        </div>
        <div className='flex gap-5 flex-wrap justify-center'>
            {
                data.map(({title, value, icon}: CardProps) =>
                    <Card key={title} title={title} value={value} icon={icon} />    
                )
            }
        </div>
        
    </div>
  )
}

export default Overview