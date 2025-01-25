import Profile from '../../molecules/profile/Profile'
import TextGroup from '../../molecules/text-group/TextGroup'
import { SocialMedia } from '../../molecules/social-media/SocialMedia'
import Cv from '../../molecules/cv/Cv'
import { Meteors } from '../../atoms/meteors/Meteors'

const ProfileSection = () => {
  return (
    <section
      id='home'
      className='min-h-screen relative flex flex-col justify-center items-center overflow-hidden w-full'
    >
      <Profile />
      <TextGroup />
      <SocialMedia />
      <Cv />
      <Meteors number={30} />
    </section>
  )
}

export default ProfileSection