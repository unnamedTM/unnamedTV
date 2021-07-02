import Head from "next/head";
import React from "react";
import Layout from "../utils/comps/Layout";

import Image from "next/image";
import Link from "next/link";
import four from "../styles/404.module.css";
const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found | 404 </title>
        <script>document.body.style.backgroundColor = "white"</script>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta />
      </Head>
      <Layout>
        <div
          className="DaContainer"
          style={{
            filter: "drop-shadow(-6px 1px 4px #00000070)",
            height: "1000px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            //   justifyContent: "center",
            alignContent: "center",
            color: "black",
            fontSize: "20px",
          }}
        >
          <div
            style={{
              paddingTop: "100px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image
              className={four.Image}
              src="/images/m-l-v2.svg"
              alt="YankeeWithBrim"
              width="100"
              height={110}
              priority
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                404 | Not Found 😔
              </div>
              <div className={four.Link}>
                <Link href="/">Go back</Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NotFound;
