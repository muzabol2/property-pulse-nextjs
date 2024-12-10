"use client";

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
  SubmitPropertyButton,
} from "./PropertyAddEdit";

const PropertyAddForm = () => {
  return (
    <form onSubmit={addProperty}>
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

      <SubmitPropertyButton
        defaultText="Add Property"
        pendingText="Adding..."
      />
    </form>
  );
};

export { PropertyAddForm };
