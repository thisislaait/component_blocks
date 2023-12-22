import './App.css'
import { Router, Routes, Route} from 'react-router-dom';
import Layout from './utils/Layout';

//Importing Pages
import LandingPage from './pages/landingPage';
import Accordion from './pages/accordionContent';
import WeatherApp from './pages/WeatherApp';


function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/accordions' element={<Accordion />} />
          <Route path='/weather-app' element={<WeatherApp />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App

