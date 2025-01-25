import DecayCard from '../../atoms/decay-card/DecayCard'
import smuray from '../../../assets/images/smuray.jpg'
import binus from '../../../assets/images/binus.jpeg'
import Title from '../../atoms/title/Title'
import Container from '../../container/Container'

const EducationGroup = () => {
  return (
    <Container>
      <Title text='Educations.' />
      <div className='mt-5 flex justify-center flex-wrap'>
        <DecayCard width={400} height={500} image={smuray} tag='2019-2022'>
          <h2>SMAN</h2>
          <p>1 Jonggol</p>
          <p className='text-lg'>High School Diploma (MIPA)</p>
          <p className='text-lg'>Score <span className='font-bold text-yellow-300'>87.07</span> of <span className='font-bold text-yellow-300'>100</span></p>
        </DecayCard>
        <DecayCard width={400} height={500} image={binus} tag='2022-2026'>
          <h2>BINUS</h2>
          <p>University</p>
          <p className='text-lg'>Computer Science</p>
          <p className='text-lg'>GPA <span className='font-bold text-yellow-300'>3.74</span> of <span className='font-bold text-yellow-300'>4.00</span></p>
        </DecayCard>
      </div>
    </Container>
  )
}

export default EducationGroup