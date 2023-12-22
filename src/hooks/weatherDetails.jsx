
// Separate component for displaying individual weather details
const WeatherDetailItem = ({ icon, label, value }) => {
  return (
    <div className="col flex items-center justify-between gap-1 text-left">
      {icon}
      <div>
        <p className="humidity text-[26px] ">{value}</p>
        <p className="-mt-2 text-sm">{label}</p>
      </div>
    </div>
  );
};

export default WeatherDetailItem;