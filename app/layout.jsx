import '@styles/globals.css';
import Provider from '@components/Provider';
import Nav from '@components/Nav';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};

// all pages will have

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/images/logo.svg"
          type="image/svg"
          sizes="32x32"
        />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
