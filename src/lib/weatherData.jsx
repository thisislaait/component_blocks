import { WiDayRainMix, WiCloudyWindy, WiDayCloudy, WiDaySunny, WiDayFog, WiDayHaze } from 'react-icons/wi';
import { CiCloudDrizzle } from 'react-icons/ci';
import { FaWater } from 'react-icons/fa6';
import WeatherDetailItem from '../hooks/weatherDetails';


// Separate component for displaying weather details
const WeatherDetails = ({ weatherData }) => {
  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'Clouds':
        return {icon: <WiDayCloudy className="pt-7 pb-3 w-44 h-44" />, label: 'Cloudy'};
      case 'Rain':
        return {icon: <WiDayRainMix className="pt-7 pb-3 w-44 h-44"/>, label: 'Rain'};
      case 'Clear':
        return {icon: <WiDayHaze className="pt-7 pb-3 w-44 h-44" />, label: 'Clear'};
      case 'Drizzle':
        return {icon: <CiCloudDrizzle className="pt-7 pb-3 w-44 h-44" />, label: 'Light Showers'};
      case 'Mist':
        return {icon: <WiDayFog className="pt-7 pb-3 w-44 h-44" />, label: 'Misty'};
    }
  };

  const { icon, label } = getWeatherIcon(weatherData.weather[0].main);

  return (
    <div className="weather flex flex-col items-center justify-center">
      {icon}
      {/*<p className='text-center text-gray-300 text-[8px] -mt-10'>{label}</p>*/}
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