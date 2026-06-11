import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
  return (
    <div className='border border-gray-300 max-w-md w-full'>
        <div className='relative h-48 w-full overflow-hidden'>
            <Image
            src={"/hero.jpeg"}
            alt='Project 1'
            fill
            className='object-cover '
            />

        </div>

        <div>
            <h1 className='flex '>Blog App</h1>
            <p></p>
        </div>
    </div>
  )
}

export default ProjectCard