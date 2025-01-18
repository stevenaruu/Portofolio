import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashPage from './components/pages/splash-page/SplashPage';
import {useSelector } from 'react-redux';
import { selectSplashScreen } from './store/splash-screen/SplashScreenSlice';
import HomePage from './components/pages/home-page/HomePage';

const App = () => {
  const isSplashScreen = useSelector(selectSplashScreen);
  
  if (isSplashScreen) return <SplashPage />

  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App
