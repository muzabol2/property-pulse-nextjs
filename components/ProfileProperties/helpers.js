import { deleteProperty } from "@/app/actions";
import { useState } from "react";
import { toast } from "react-toastify";

export const useHelpers = (initialProperties) => {
  const [properties, setProperties] = useState(initialProperties);

  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );
    if (!confirmed) {
      return;
    }

    await deleteProperty(propertyId);

    const updatedProperties = properties.filter(
      (property) => property._id !== propertyId
    );

    setProperties(updatedProperties);

    toast.success("Property deleted.");
  };

  return { properties, handleDeleteProperty };
};
