import Profile from '../../molecules/profile/Profile'
import TextGroup from '../../molecules/text-group/TextGroup'
import { SocialMedia } from '../../molecules/social-media/SocialMedia'
import { Meteors } from '../../atoms/meteors/Meteors'
import Document from '../../molecules/document/Document'

const ProfileSection = () => {
  return (
    <section
      id='home'
      className='min-h-screen relative flex flex-col justify-center items-center overflow-hidden w-full'
    >
      <Profile />
      <TextGroup />
      <SocialMedia />
      <Document />
      <Meteors number={30} />
    </section>
  )
}

export default ProfileSection