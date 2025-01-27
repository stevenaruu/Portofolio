import github from '../../../assets/icon/github.svg'
import linkedin from '../../../assets/icon/linkedin.svg'
import email from '../../../assets/icon/email.svg'
import instagram from '../../../assets/icon/instagram.svg'
import { motion } from 'framer-motion';
import { BorderBeam } from '../../atoms/border-beam/BorderBeam'
import { openInNewTab } from '../../../lib/utils';

export const SocialMedia = () => {
  return (
    <motion.div
      className='absolute flex md:flex-col bottom-48 gap-5 md:bottom-auto md:right-0 px-8 sm:px-10 lg:px-12'
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    >
      <div onClick={() => openInNewTab('https://github.com/stevenaruu')} className='px-3 py-3 rounded-full relative cursor-pointer'>
        <img className='size-7' src={github} alt="" />
        <BorderBeam borderWidth={2} size={30} duration={3} delay={9} />
      </div>
      <div onClick={() => openInNewTab('https://www.linkedin.com/in/stevenaruu/')} className='px-3 py-3 rounded-full relative cursor-pointer'>
        <img className='size-7' src={linkedin} alt="" />
        <BorderBeam borderWidth={2} size={30} duration={3} delay={9} />
      </div>
      <div onClick={() => openInNewTab('mailto:stvnhd164@gmail.com')} className='px-3 py-3 rounded-full relative cursor-pointer'>
        <img className='size-7' src={email} alt="" />
        <BorderBeam borderWidth={2} size={30} duration={3} delay={9} />
      </div>
      <div onClick={() => openInNewTab('https://www.instagram.com/stvnism/')} className='px-3 py-3 rounded-full relative cursor-pointer'>
        <img className='size-7' src={instagram} alt="" />
        <BorderBeam borderWidth={2} size={30} duration={3} delay={9} />
      </div>
    </motion.div>
  )
}
