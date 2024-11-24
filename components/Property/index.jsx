import { BookmarkButton } from "./BookmarkButton";
import { PropertyContactForm } from "./PropertyContactForm";
import { ShareButtons } from "./ShareButtons";
import { BackToPropertiesButton } from "./BackToPropertiesButton";
import { Summary } from "./PropertyDetails/1_Summary";
import { Details } from "./PropertyDetails/2_Details";
import { Amenities } from "./PropertyDetails/3_Amenities";
import { MapLocation } from "./PropertyDetails/4_MapLocation";
import { PropertyHeaderImage } from "./PropertyHeaderImage";
import { PropertyLayout } from "./PropertyLayout";
import { PropertyImages } from "./PropertyImages";

const PropertyInfo = ({ property }) => {
  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <BackToPropertiesButton />
      <PropertyLayout
        main={
          <>
            <Summary property={property} />
            <Details property={property} />
            <Amenities amenities={property.amenities} />
            <MapLocation property={property} />
          </>
        }
        aside={
          <>
            <BookmarkButton property={property} />
            <ShareButtons property={property} />
            <PropertyContactForm property={property} />
          </>
        }
      />
      <PropertyImages images={property.images} />
    </>
  );
};

export { PropertyInfo };
