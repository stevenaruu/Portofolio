import Navbar from '../../molecules/navbar/Navbar';
import HomeLayout from '../../templates/home-layout/ProfileLayout';

const HomePage = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <HomeLayout />
    </div>
  )
}

export default HomePage