import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Main from "../components/Main";
import Head from "next/head";
const index = () => {
  return (
    <Layout>
      <Head>
        <title>ClassLink Hotel</title>
      </Head>
      <Main />
    </Layout>
  );
};

export default index;
