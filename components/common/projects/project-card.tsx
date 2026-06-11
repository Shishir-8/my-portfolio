import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
  return (
    <div className='max-w-md w-full shadow rounded-lg hover:-translate-y-1 duration-300'>
        <div className='relative h-48 w-full overflow-hidden rounded-lg'>
            <Image
            src={"https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt='Project 1'
            fill
            className='object-cover hover:scale-105 duration-300'
            />
        </div>

        <div className='p-2 space-y-2'>
            <h1 className='flex text-lg font-semibold'>Blog App</h1>
            <p className='text-muted-foreground text-sm'>This is a blog description okay</p>
            <a
            target='_blank'
            rel='noopener noreferrer'
            className='flex text-green-500 items-center gap-2 text-xs hover:underline transition duration-300' href="">View Project Demo
                <span><ArrowRight className='w-5 h-5' /></span>
            </a>
        </div>
    </div>
  )
}

export default ProjectCard