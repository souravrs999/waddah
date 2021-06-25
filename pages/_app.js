import "../styles/globals.css";
import "../styles/bootstrap.min.css";

import LayoutComponent from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;
