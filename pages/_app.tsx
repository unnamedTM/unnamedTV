import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../comps/nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Nav>
    <Component {...pageProps} />
    // </Nav>
  );
}

export default MyApp;
