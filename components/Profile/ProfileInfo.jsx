import { ProfileDefaultImage } from "@/assets";
import Image from "next/image";

const ProfileInfo = ({ user }) => {
  return (
    <div className="md:w-1/4 mx-auto mt-10">
      <div className="mb-4 flex justify-center">
        <Image
          className="h-32 w-32 md:h-48 md:w-48 rounded-full"
          src={user.image || ProfileDefaultImage}
          alt="User"
          width={200}
          height={200}
        />
      </div>

      <div className="text-center max-w-xs mx-auto">
        <h2 className="text-xl sm:text-lg md:text-2xl mb-4">
          <span className="font-bold block">Name:</span>
          <span className="block">{user.name}</span>
        </h2>
        <h2 className="text-xl sm:text-lg md:text-2xl mb-4">
          <span className="font-bold block">Email:</span>
          <span className="block">{user.email}</span>
        </h2>
      </div>
    </div>
  );
};

export { ProfileInfo };
