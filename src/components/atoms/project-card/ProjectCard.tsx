import { ReactNode } from 'react'
import { BorderBeam } from '../border-beam/BorderBeam'
import { openInNewTab } from '../../../lib/utils'

const ProjectCard = ({ children, title, description, image, link }: { children: ReactNode, title: string, description: string, image: string, link: string }) => {
  return (
    <div className='mx-auto flex relative w-[96%] bg-zinc-900 h-[48rem] md:h-96 mt-10 rounded-lg'>
      <div className='w-full md:w-1/2 p-5 h-full'>
        <p className='font-extrabold text-3xl'>{ title }</p>
        <p className='mt-2 font-semibold mb-4'>{ description }</p>
        <div className='flex gap-5 flex-wrap'>
          { children }
        </div>
        <div onClick={() => openInNewTab(link)} className='mt-5 px-4 rounded-full w-fit flex items-center justify-center gap-1 py-1 bg-zinc-800 cursor-pointer'>
          <img className='size-10' src={image} alt="" />
          <p>View More</p>
        </div>
      </div>
      <div className='w-1/2 flex justify-end items-end'>
        <div className='w-5/6 h-5/6 bg-red-300'>

        </div>
      </div>
      <BorderBeam borderWidth={3} size={100} duration={10} delay={9} />
    </div>
  )
}

export default ProjectCard