import "@/assets/styles/globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Property-Pulse-App",
  description: "App to manage selling and buying properties",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
