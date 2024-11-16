import {
  BackToPropertiesButton,
  PropertyDetails,
  PropertyHeaderImage,
  PropertyImages,
} from "@/components";
import { connectDB } from "@/config";
import { Property } from "@/models";

const PropertyPage = async ({ params }) => {
  await connectDB();
  const property = await Property.findById(params.id).lean();

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
