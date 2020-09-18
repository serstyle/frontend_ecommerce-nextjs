import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/snipcart.css";
import { Container } from "@material-ui/core";
import Head from "next/head";
import React from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const [store, setStore] = React.useState(null);
  const [snipcartReady, setSnipcartReady] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("snipcart.ready", () => {
      setSnipcartReady(true);
    });
  }, []);

  React.useEffect(() => {
    console.log(snipcartReady);
    // if (snipcartReady) { // maye need to be removed
    let currentValue: any;
    (window as any).Snipcart?.store.subscribe(() => {
      let previousValue = currentValue;
      currentValue = (window as any).Snipcart.store.getState();
      console.log(previousValue, currentValue);
      if (previousValue !== currentValue) {
        const store = (window as any).Snipcart.store.getState();
        setStore(store);
      }
    });
    // }
  }, [snipcartReady]);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
        <meta lang="fr" />
        <meta name="description" content="Le meilleur du savon bio fait main" />
        <meta
          name="og:descirption"
          content="Le meilleur du savon bio fait main"
        />
        <meta
          name="keywords"
          content="savon, savonade, bio, alep, frontend, ecommerce, nextjs"
        />
      </Head>
      <Container>
        <Component store={store} {...pageProps} />
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js"
        ></script>
        <div
          id="snipcart"
          data-api-key="ZGVlYjI4OGQtYzQxNC00NTI2LThlMmMtOTNlZmE4MmMxOTU3NjM3MzUyNDY0MzQ5MDg0OTg0"
          data-config-add-product-behavior="none"
          hidden
          dangerouslySetInnerHTML={{ __html: "" }}
        ></div>
      </Container>
    </div>
  );
}

export default MyApp;
