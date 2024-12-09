import { PropertyCard } from "@/components/common";
import { connectDB } from "@/config";
import { User } from "@/models";
import { getSessionUser } from "@/utils";

const SavedPropertiesPage = async () => {
  await connectDB();

  const { userId } = await getSessionUser();

  const { bookmarks } = await User.findById(userId).populate("bookmarks");

  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {bookmarks.length === 0 ? (
          <p>No saved properties</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookmarks.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedPropertiesPage;
