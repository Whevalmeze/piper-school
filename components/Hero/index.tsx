import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link';
import { Zap } from 'lucide-react';

const Hero = () => {
  return (
    <div className='p-5 text-center h-full flex flex-col items-center'>
        <div className="lg:w-[70%] flex flex-col gap-3 py-8 lg:py-8">
            <h1 className="font-bold text-4xl lg:text-7xl tracking-tighter">Your <span className=''>all-in-one</span> school management platform. </h1>
            <p className='text-xl font-medium'>Manage all your learners efficiently.</p>
            <div className='mt-3'>
                <Button className='bg-arapawa-800' ><Link className='flex gap-2 items-center' href="/dashboard">Start Using For Free <Zap size={16} /></Link></Button>
            </div>
        </div>
    </div>
  )
}

export default Hero;