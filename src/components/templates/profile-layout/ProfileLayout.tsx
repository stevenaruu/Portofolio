import { Meteors } from '../../atoms/meteors/Meteors'
import Cv from '../../molecules/cv/Cv'
import Profile from '../../molecules/profile/Profile'
import { SocialMedia } from '../../molecules/social-media/SocialMedia'
import TextGroup from '../../molecules/text-group/TextGroup'

const ProfileLayout = () => {

  return (
    <section
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

export default ProfileLayout