import { addProperty } from "@/app/actions";

import { PropertyType } from "./1_PropertyType";
import { ListingName } from "./2_ListingName";
import { Description } from "./3_Description";
import { Location } from "./4_Location";
import { SizeDetails } from "./5_SizeDetails";
import { Amenities } from "./6_Amenities";
import { CostRates } from "./7_CostRates";
import { SellerDetails } from "./8_SellerDetails";
import { ImagesUploader } from "./9_ImagesUploader";

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
