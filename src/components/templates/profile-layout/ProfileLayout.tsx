import Profile from '../../molecules/profile/Profile'
import TextGroup from '../../molecules/text-group/TextGroup'

const ProfileLayout = () => {

  return (
    <section
      className='min-h-screen flex flex-col justify-center items-center'
    >
      <Profile />
      <TextGroup />
    </section>
  )
}

export default ProfileLayout