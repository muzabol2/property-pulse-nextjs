import { addProperty } from "@/app/actions";
import {
  Amenities,
  CostRates,
  Description,
  ImagesUploader,
  ListingName,
  Location,
  PropertyType,
  SellerDetails,
  SizeDetails,
} from "./PropertyAddEdit";

const PropertyAddForm = () => {
  return (
    <form action={addProperty}>
      <h2 className="text-3xl text-center font-semibold mb-6">Add Property</h2>
      <PropertyType />
      <ListingName />
      <Description />
      <Location />
      <SizeDetails />
      <Amenities />
      <CostRates />
      <SellerDetails />
      <ImagesUploader />

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Property
      </button>
    </form>
  );
};

export { PropertyAddForm };
