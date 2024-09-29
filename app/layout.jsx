import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property-Pulse-App',
  description: 'App to manage selling and buying properties',
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
