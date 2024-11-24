import { FaTimes, FaMapMarker } from "react-icons/fa";
import { Card } from "./Card";

const Rate = ({ label, value }) => (
  <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
    <div className="text-gray-500 mr-2 font-bold">{label}</div>
    <div className="text-2xl font-bold text-blue-500">
      {value ? `$${value}` : <FaTimes className="text-red-700" />}
    </div>
  </div>
);

const Summary = ({ property }) => {
  const {
    type,
    name,
    location: { street, city, state },
    rates: { nightly, weekly, monthly },
  } = property;

  return (
    <Card>
      <div className="text-gray-500 mb-4">{type}</div>
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
        <FaMapMarker className="text-orange-700 mt-1 mr-1" />
        <p className="text-orange-700">
          {street}, {city} {state}
        </p>
      </div>

      <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
        Rates & Options
      </h3>
      <div className="flex flex-col md:flex-row justify-around">
        <Rate label="Nightly" value={nightly} />
        <Rate label="Weekly" value={weekly} />
        <Rate label="Monthly" value={monthly} />
      </div>
    </Card>
  );
};

export { Summary };
