import { connectDB } from "@/config";
import { User } from "@/models";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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

export { authOptions };
