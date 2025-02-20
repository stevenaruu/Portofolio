import { useState } from 'react'
import CreativeButton from '../../atoms/creative-button/CreativeButton'
import IdentityCard from '../../atoms/identity-card/IdentityCard'
import Input from '../../atoms/input/Input'
import Container from '../../container/Container'

const FormGroup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSendMessage = () => {
    console.log("Form Data:", formData);
  }

  const handleChange = (label: string, value: string) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  return (
    <Container>
      <div className='relative z-20 flex flex-col gap-16 md:flex-row md:gap-0 justify-around items-center py-28'>
        <div className='flex flex-col gap-16 w-full md:w-[20%]'>
          <CreativeButton title='CONTACT' content='CONTACT!' />
          <IdentityCard />
        </div>
        <div className='flex flex-col gap-16 w-full md:w-8/12'>
          <Input label='name' onChange={(value) => handleChange('name', value)} />
          <Input label='email' onChange={(value) => handleChange('email', value)} />
          <Input label='subject' onChange={(value) => handleChange('subject', value)} />
          <Input label='message' onChange={(value) => handleChange('message', value)} />
          <div className='w-full md:w-1/4'>
            <CreativeButton onClick={handleSendMessage} title='SEND' content='MESSAGE' />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FormGroup