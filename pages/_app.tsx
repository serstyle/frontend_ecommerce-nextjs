import { AppProps } from "next/app";
import "../styles/globals.css";
import { Container } from "@material-ui/core";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
      </Head>
      <Container>
        <Component {...pageProps} />
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js"
        ></script>
        <div
          id="snipcart"
          data-api-key="ZGVlYjI4OGQtYzQxNC00NTI2LThlMmMtOTNlZmE4MmMxOTU3NjM3MzUyNDY0MzQ5MDg0OTg0"
          hidden
        ></div>
      </Container>
    </div>
  );
}

export default MyApp;
