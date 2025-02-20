import IdentityCard from '../../atoms/identity-card/IdentityCard'
import Input from '../../atoms/input/Input'
import Container from '../../container/Container'

const FormGroup = () => {
  return (
    <Container>
      <div className='flex flex-col gap-16 md:flex-row md:gap-0 justify-around items-center py-32'>
        <div className='w-full md:w-2/12'>
          <IdentityCard />
        </div>
        <div className='flex flex-col gap-16 w-full md:w-8/12'>
          <Input label='name' />
          <Input label='email' />
          <Input label='subject' />
          <Input label='message' />
        </div>
      </div>
    </Container>
  )
}

export default FormGroup