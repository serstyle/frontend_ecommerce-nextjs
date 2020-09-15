import { AppProps } from "next/app";
import "../styles/globals.css";
import { Container } from "@material-ui/core";
import Head from "next/head";
import React from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const [cart, setCart] = React.useState(null);

  React.useEffect(() => {
    console.log("useeffect")
    document.addEventListener("snipcart.ready", () => {
      console.log("snipcart ready")
      let currentValue: any; // TODO: need to fix an interface
      // (window as any).Snipcart.events.on(
      //   "snipcart.initialized",
      //   (snipcartState: any) => {
      //     console.log("initialized")
      // console.log(snipcartState);
      // let previousValue = currentValue;
      // currentValue = snipcartState;

      // if (previousValue !== currentValue) {
      //   const cart = snipcartState.cart;
      //   setCart(cart);
      //   console.log("cart", cart);
      // }
      const unsubscribe = (window as any).Snipcart.store.subscribe(() => {
        console.log("sunbscrive")
        let previousValue = currentValue;
        currentValue = (window as any).Snipcart.store.getState();
        console.log(previousValue, currentValue)
        if (previousValue !== currentValue) {
          const cart = (window as any).Snipcart.store.getState().cart;
          setCart(cart);
        }
      });
      // }
      // );
      // unsubscribe();
    });
  }, []);
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
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
        <Component cart={cart} {...pageProps} />
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js"
        ></script>
        <div
          id="snipcart"
          data-api-key="ZGVlYjI4OGQtYzQxNC00NTI2LThlMmMtOTNlZmE4MmMxOTU3NjM3MzUyNDY0MzQ5MDg0OTg0"
          data-config-add-product-behavior="none"
          hidden
        ></div>
      </Container>
    </div>
  );
}

export default MyApp;
