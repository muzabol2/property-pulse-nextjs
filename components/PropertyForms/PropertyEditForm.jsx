import { updateProperty } from "@/app/actions";
import {
  Amenities,
  CostRates,
  Description,
  ListingName,
  Location,
  PropertyType,
  SellerDetails,
  SizeDetails,
} from "./PropertyAddEdit";

const PropertyEditForm = ({ property }) => {
  const updatePropertyById = updateProperty.bind(null, property._id);

  return (
    <form action={updatePropertyById}>
      <h2 className="text-3xl text-center font-semibold mb-6">Edit Property</h2>
      <PropertyType value={property.type} />
      <ListingName value={property.name} />
      <Description value={property.description} />
      <Location value={property.location} />
      <SizeDetails property={property} />
      <Amenities value={property.amenities} />
      <CostRates value={property.rates} />
      <SellerDetails sellerInfo={property.seller_info} />

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Edit Property
      </button>
    </form>
  );
};

export { PropertyEditForm };
