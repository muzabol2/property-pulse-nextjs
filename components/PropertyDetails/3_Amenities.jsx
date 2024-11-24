import { FaCheck } from "react-icons/fa";
import { Card } from "./Card";

const Amenities = ({ amenities }) => {
  return (
    <Card>
      <h3 className="text-lg font-bold mb-6">Amenities</h3>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none space-y-2">
        {amenities.map((amenity, index) => (
          <li key={index}>
            <FaCheck className="inline-block text-green-600 mr-2" /> {amenity}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export { Amenities };
