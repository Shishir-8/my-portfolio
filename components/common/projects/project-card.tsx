import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Item = {
  id: number
  title: string
  description: string
  imageUrl: string
  link: string
}

type ProjectCardProps = {
  item: Item
}

const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <div className='max-w-md w-full overflow-hidden rounded-2xl border bg-background shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
      <div className='relative aspect-video w-full overflow-hidden'>
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className='object-cover transition-transform duration-500 hover:scale-110'
        />
      </div>

      <div className='p-5 space-y-3'>
        <h1 className='text-xl font-bold tracking-tight line-clamp-1'>
          {item.title}
        </h1>

        <p className='text-muted-foreground text-sm leading-relaxed line-clamp-3'>
          {item.description}
        </p>

        <a
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-2 text-sm font-medium text-green-500 hover:text-green-600 transition-colors duration-300 group'
        >
          View Project Demo
          <ArrowRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard