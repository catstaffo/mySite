import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Handler({ children }) {
  return (
    <>
      <Head>
        <title>Catherine Stafford</title>
        <meta
          name="description"
          content="Personal site of Catherine Stafford"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
    </>
  );
}
