import Title from '../../atoms/title/Title'
import Container from '../../container/Container'
import { motion } from 'framer-motion'

const AboutContent = () => {
  return (
    <Container>
      <Title text="About Me." />
      <motion.div
        initial={{ x: '-5%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        <div className='text-5xl md:text-6xl font-bold'>Ciao!~ <span className='text-secondary'>I'm Steven,</span></div>
        <div className='mt-2'>A <span className='text-secondary font-semibold'>Junior Programmer</span> at the IT Division of Bina Nusantara University, where I'm currently pursuing a Bachelor's degree in <span className='font-semibold text-secondary'>Computer Science</span> (Software Engineering Specialization) with a GPA of <span className='font-semibold text-secondary'>3.74/4.00</span>. I'm highly <span className='font-semibold text-secondary'>passionate</span> and <span className='font-semibold text-secondary'>enthusiastic</span> about taking on <span className='font-semibold text-secondary'>new challenges</span>. I <span className='font-semibold text-secondary'>love</span> strive to create innovative solutions especially bring ideas to life <span className='font-semibold text-secondary'>through coding.</span> I'm deeply <span className='font-semibold text-secondary'>fascinated</span> by the ever-evolving world of <span className='font-semibold text-secondary'>technology</span> and <span className='font-semibold text-secondary'>constantly</span> seek to expand my <span className='font-semibold text-secondary'>knowledge</span> and <span className='font-semibold text-secondary'>skills</span> in this <span className='font-semibold text-secondary'>dynamic field.</span></div>
      </motion.div>
    </Container>
  )
}

export default AboutContent