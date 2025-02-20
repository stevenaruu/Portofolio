import { ReactNode } from 'react'
import { BorderBeam } from '../border-beam/BorderBeam'
import { openInNewTab } from '../../../lib/utils'
import Github from '../../../assets/icon/github'

const ProjectCard = ({ children, title, description, link, mobile, dekstop }: { children: ReactNode, title: string, description: string, link: string, mobile: string, dekstop: string }) => {
  return (
    <div className='mx-auto flex relative flex-col md:flex-row w-[96%] bg-zinc-900 h-full md:h-96 mt-10 rounded-lg'>
      <div className='w-full md:w-1/2 p-5 h-full'>
        <p className='font-extrabold text-3xl'>{title}</p>
        <p className='mt-2 font-semibold mb-4'>{description}</p>
        <div className='flex gap-5 flex-wrap'>
          {children}
        </div>
        <div onClick={() => openInNewTab(link)} className='mt-5 px-4 rounded-full w-fit flex items-center justify-center gap-1 py-1 bg-zinc-800 cursor-pointer'>
          <Github height={40} width={40} />
          <p>View More</p>
        </div>
      </div>
      <div className='pb-5 md:pb-0 md:w-1/2 flex justify-end items-end'>
        <div className='w-5/6 h-5/6 mx-auto md:mx-0 relative rounded-ss-lg'>
          <img className='h-full w-full object-cover rounded-md md:rounded-none md:rounded-ss-lg' src={dekstop} alt="" />
          <div className='w-1/3 h-5/6 absolute left-3 bottom-3 rounded-md md:rounded-none rounded-se-lg'>
            <img className='h-full' src={mobile} alt="" />
          </div>
        </div>
      </div>
      <BorderBeam borderWidth={3} size={100} duration={10} delay={9} />
    </div>
  )
}

export default ProjectCard