import { Summary } from "./1_Summary";
import { Details } from "./2_Details";
import { Amenities } from "./3_Amenities";
import { MapLocation } from "./4_MapLocation";

const PropertyDetails = ({ property }) => {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main className="flex flex-col gap-6">
            <Summary property={property} />
            <Details property={property} />
            <Amenities amenities={property.amenities} />
            <MapLocation property={property} />
          </main>
        </div>
      </div>
    </section>
  );
};

export { PropertyDetails };
