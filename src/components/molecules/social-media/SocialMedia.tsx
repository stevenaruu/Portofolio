import { motion } from 'framer-motion';
import { BorderBeam } from '../../atoms/border-beam/BorderBeam'
import { openInNewTab } from '../../../lib/utils';
import Email from '../../../assets/icon/email';
import Github from '../../../assets/icon/github';
import LinkedIn from '../../../assets/icon/linkedin';
import Instagram from '../../../assets/icon/instagram';

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
        <Github height={28} width={28} />
        <BorderBeam borderWidth={2} size={30} duration={3} delay={9} />
      </div>
      <div onClick={() => openInNewTab('https://www.linkedin.com/in/stevenaruu/')} className='px-3 py-3 rounded-full relative cursor-pointer'>
        <LinkedIn height={28} width={28} />
        <BorderBeam borderWidth={2} size={30} duration={3} delay={9} />
      </div>
      <div onClick={() => openInNewTab('mailto:stvnhd164@gmail.com')} className='px-3 py-3 rounded-full relative cursor-pointer'>
        <Email height={24} width={24} />
        <BorderBeam borderWidth={2} size={30} duration={3} delay={9} />
      </div>
      <div onClick={() => openInNewTab('https://www.instagram.com/stvnism/')} className='px-3 py-3 rounded-full relative cursor-pointer'>
        <Instagram height={28} width={28} />
        <BorderBeam borderWidth={2} size={30} duration={3} delay={9} />
      </div>
    </motion.div>
  )
}
