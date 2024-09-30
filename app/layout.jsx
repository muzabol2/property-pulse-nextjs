import '@/assets/styles/globals.css';
import { Navbar } from '@/components';

export const metadata = {
  title: 'Property-Pulse-App',
  description: 'App to manage selling and buying properties',
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
