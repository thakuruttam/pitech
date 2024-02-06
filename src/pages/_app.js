import Head from "next/head";
import { CssBaseline } from "@mui/material";
import "simplebar-react/dist/simplebar.min.css";
import { Layout } from "src/layouts/dashboard/layout";


const App = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Uttam Singh</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} /></Layout>
    </>
  );
};

export default App;
