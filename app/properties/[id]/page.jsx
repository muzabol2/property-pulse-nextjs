import {
  BackToPropertiesButton,
  PropertyDetails,
  PropertyHeaderImage,
  PropertyImages,
} from "@/components";
import { connectDB } from "@/config";
import { Property } from "@/models";
import { convertToSerializableObject } from "@/utils";

const PropertyPage = async ({ params }) => {
  await connectDB();
  const propertyDoc = await Property.findById(params.id).lean();
  const property = convertToSerializableObject(propertyDoc);

  if (!property) {
    return (
      <h1 className="text-center text-2xl fond-bold mt-10">
        Property not found
      </h1>
    );
  }

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <BackToPropertiesButton />
      <PropertyDetails property={property} />
      <PropertyImages images={property.images} />
    </>
  );
};

export default PropertyPage;
