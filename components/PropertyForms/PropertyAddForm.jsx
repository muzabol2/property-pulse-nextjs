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
} from "./PropertyAddEdit";
import { useState } from "react";
import { Spinner } from "@/components/common";

const PropertyAddForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    try {
      await addProperty(formData);
    } catch (error) {
      console.error("Error adding property:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <form onSubmit={handleSubmit}>
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
