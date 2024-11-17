import { ProfileInfo, ProfileProperties } from "@/components";
import { connectDB } from "@/config";
import { Property } from "@/models";
import { convertToSerializableObject, getSessionUser } from "@/utils";

const ProfilePage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();
  const { userId } = sessionUser;

  if (!userId) {
    throw new Error("User ID is required");
  }

  const propertiesDocs = await Property.find({ owner: userId }).lean();
  const properties = propertiesDocs.map(convertToSerializableObject);

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>

          <div className="flex flex-col md:flex-row">
            <ProfileInfo user={sessionUser.user} />

            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Your Listings:</h2>
              <ProfileProperties properties={properties} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
