import Footer from '../../atoms/footer/Footer';
import Navbar from '../../molecules/navbar/Navbar';
import HomeLayout from '../../templates/home-layout/HomeLayout';

const HomePage = () => {
  return (
    <div className='h-full'>
      <Navbar />
      <HomeLayout />
      <Footer />
    </div>
  )
}

export default HomePage