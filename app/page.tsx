
import About from '@/components/common/about'
import DockSection from '@/components/common/dock'
import Dock from '@/components/common/dock'
import Education from '@/components/common/education/education'
import HeroSection from '@/components/common/hero-section'
import ProjectSection from '@/components/common/projects/project-section'
import SkillSection from '@/components/common/skill-section/skills'
import WorkExperience from '@/components/common/work-experience/work-experience'
import React from 'react'

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto'>
      <HeroSection />
      <About />
      <Education />
      <WorkExperience />
      <SkillSection />
      <DockSection />
      <ProjectSection />

    </main>
  )
}
