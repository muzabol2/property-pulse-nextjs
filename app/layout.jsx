import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/globals.css";

import { AuthProvider, Footer, Navbar } from "@/components";

export const metadata = {
  title: "Property-Pulse-App",
  description: "App to manage selling and buying properties",
};

const RootLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
