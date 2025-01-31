// pages/_app.js
//
// If you also want or need a custom App file in Next.js, here's a minimal working example.
// This file is OPTIONAL unless you want to define a custom App for the entire application.
// 
// Save it as "_app.js" inside the "pages" directory. The global CSS import is typically done
// here in modern Next.js projects, rather than in each page. This ensures global styles
// are applied to the entire app.
//
// If you already have an _app.js, just ensure it imports the globals and returns
// <Component {...pageProps}/> to render the app.

import '../styles/globals.css'; // <--- Global CSS import goes here
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;