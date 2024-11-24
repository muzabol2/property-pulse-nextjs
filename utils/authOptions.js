import { connectDB } from "@/config";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "@/constants";
import { User } from "@/models";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      await connectDB();
      const userExists = await User.findOne({ email: profile.email });

      if (!userExists) {
        const username = profile.name.slice(0, 20);

        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }

      return true;
    },

    async session({ session }) {
      const user = await User.findOne({ email: session.user.email });

      session.user.id = user?._id.toString();

      return session;
    },
  },
};
