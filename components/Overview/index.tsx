import { Contact, User, Users } from 'lucide-react'
import React, { ReactNode } from 'react'

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
    <div className='flex p-6 w-fit shadow-md rounded-2xl items-center justify-center flex-col'>
        <div className='flex gap-2 p-3'>
            {icon}
            <span className='text-2xl font-semibold'>{value}</span>
        </div>
        <span>{title}</span>
    </div> 
  )
}

const Overview = (props: Props) => {
  return (
    <div className='bg-wgite shadow-md rounded-2xl p-3'>
        <div className='w-full flex justify-between'>
            <h3 className='text-2xl font-semibold'>Overview</h3>
        </div>
        <div className='flex gap-5'>
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