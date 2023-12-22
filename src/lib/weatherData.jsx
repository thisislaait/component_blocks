import { WiDayRainMix, WiCloudyWindy } from 'react-icons/wi';
import { FaWater } from 'react-icons/fa6';
import WeatherDetailItem from '../hooks/weatherDetails';


// Separate component for displaying weather details
const WeatherDetails = ({ weatherData }) => {
  return (
    <div className="weather flex flex-col items-center justify-center">
      <WiDayRainMix className="pt-7 pb-3 w-44 h-44" />
      <h1 className="temp text-[80px] font-semibold">{Math.round(weatherData.main.temp)}°C</h1>
      <h2 className="city text-[45px] font-normal -mt-3">{weatherData.name}</h2>
      <div className="details flex items-center justify-between px-3 mt-12 gap-20">
        {/* Humidity component */}
        <WeatherDetailItem icon={<FaWater className="w-12 h-12" />} label="Humidity" value={`${weatherData.main.humidity}%`} />

        {/* Wind Speed component */}
        <WeatherDetailItem icon={<WiCloudyWindy className="w-12 h-12" />} label="Wind Speed" value={`${weatherData.wind.speed} km/h`} />
      </div>
    </div>
  );
};

export default WeatherDetails;