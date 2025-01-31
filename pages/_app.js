import '../styles/globals.css';

// The custom App component is used to initialize pages.
// We use it to wrap pages in a layout if desired.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;