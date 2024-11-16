import { Summary } from "./1_Summary";
import { Details } from "./2_Details";
import { Amenities } from "./3_Amenities";
import { Map } from "./4_Map";

const PropertyDetails = ({ property }) => {
  return (
    <main>
      <Summary property={property} />
      <Details property={property} />
      <Amenities amenities={property.amenities} />
      <Map />
    </main>
  );
};

export { PropertyDetails };
