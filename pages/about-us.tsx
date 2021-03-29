import Head from "next/head";
import Link from "next/link";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FiYoutube, FiInstagram, FiTwitter, FiTwitch, FiGithub } from "react-icons/fi";
import Layout from "../utils/comps/Layout";
import styles from "../styles/aboutUs.module.css";
const aboutUs = () => {
  return (
    <>
      <Head>
        <title>About Unnamedtm </title>
        <script>document.body.style.backgroundColor = "white"</script>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta />
      </Head>
      <Layout>
        <h1 style={{ fontSize: "1.5rem", marginTop: "45px" }}>
          About {"["} Unnamed Software {"]"}
        </h1>

        <div
          style={{
            marginTop: "20px",
            width: "150px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: "25px",
            marginBottom: "800px",
          }}
          className={styles.socialLinks}
        >
          <Link href="https://www.youtube.com/channel/UCOCilR1dI88nVCoLARkAW_w">
            <FiYoutube />
          </Link>

          <Link href="https://twitter.com/unnamedsoftware">
            <FiTwitter />
          </Link>

          <Link href="https://instagram.com/unnamedsoftwaretm">
            <FiInstagram />
          </Link>

          <Link href="https://twitch.tv/unnamedtm">
            <FiTwitch />
          </Link>

          <Link href="https://github.com/unnamedtm">
            <FiGithub />
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default aboutUs;
