import { Profile } from "@/components";
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

  return <Profile sessionUser={sessionUser} properties={properties} />;
};

export default ProfilePage;
