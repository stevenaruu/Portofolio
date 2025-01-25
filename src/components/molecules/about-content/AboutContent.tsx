import Title from '../../atoms/title/Title'
import Container from '../../container/Container'

const AboutContent = () => {
  return (
    <Container>
      <Title text="About Me." />
      <div className='text-5xl md:text-6xl font-bold'>Ciao!~ <span className='text-yellow-300'>I'm Steven,</span></div>
      <div className='mt-2'>A <span className='text-yellow-300 font-semibold'>Junior Programmer</span> at the IT Division of Bina Nusantara University, where I'm currently pursuing a Bachelor's degree in <span className='font-semibold text-yellow-300'>Computer Science</span> (Software Engineering Specialization) with a GPA of <span className='font-semibold text-yellow-300'>3.74/4.00</span>. I'm highly <span className='font-semibold text-yellow-300'>passionate</span> and <span className='font-semibold text-yellow-300'>enthusiastic</span> about taking on <span className='font-semibold text-yellow-300'>new challenges</span>. I <span className='font-semibold text-yellow-300'>love</span> strive to create innovative solutions especially bring ideas to life <span className='font-semibold text-yellow-300'>through coding.</span> I'm deeply <span className='font-semibold text-yellow-300'>fascinated</span> by the ever-evolving world of <span className='font-semibold text-yellow-300'>technology</span> and <span className='font-semibold text-yellow-300'>constantly</span> seek to expand my <span className='font-semibold text-yellow-300'>knowledge</span> and <span className='font-semibold text-yellow-300'>skills</span> in this <span className='font-semibold text-yellow-300'>dynamic field.</span></div>
    </Container>
  )
}

export default AboutContent