import React from 'react'
import SkillCard from './skill-card'

const SkillSection = () => {
  return (
    <section id='skills' className='space-y-4'>
        <h1 className='text-xl font-semibold'>Skills</h1>

        <div className='flex flex-wrap gap-3'>
          <SkillCard title={"HTML"} imageUrl='/HTML5.png'/>
          <SkillCard title={"CSS"} imageUrl='/CSS3.png'/>
          <SkillCard title={"Javascript"} imageUrl='/Javascript.png'/>
          <SkillCard title={"Tailwind CSS"} imageUrl='/Tailwind CSS.png'/>
          <SkillCard title={"React"} imageUrl='/React.png'/>
          <SkillCard title={"Next.js"} imageUrl='/Next.js.png'/>
          <SkillCard title={"Typescript"} imageUrl='/Typescript.png'/>
          <SkillCard title={"Node.js"} imageUrl='/Node.js.png'/>
          <SkillCard title={"Python"} imageUrl='/Python.png'/>
          <SkillCard title={"Django"} imageUrl='/Django.png' />
          <SkillCard title={"Django Rest Framework"} imageUrl='/Django.png'/>
        </div> 
    </section>
  )
}

export default SkillSection