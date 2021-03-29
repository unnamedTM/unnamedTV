
import styles from '../styles/Home.module.css'
import Layout from '../utils/comps/Layout'
import Slider_Comp from "../utils/comps/Slider_Comp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Founders_Profiles } from "../utils/data/data";

import Head from "next/head";
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>

        <meta name="description" content="Unnamed Software is the main hub for all things related to well.... unnamed™ " />
        <meta name="keywords" content="unnamed, unnamedsoftware, unnamedsoftware™, unnamed software, software™, unnamedsoftware™, kappac0dex, xunderal, lingduck, kappa™, unnamed[tv], unnamedTV, unnamed[tm] " />
        <meta name="author" content="Kappa™" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Home - Unnamed{"[tv]"}</title>
        <script>document.body.style.backgroundColor = "white"</script>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta />
      </Head>
      <Layout>
        <div className={styles.container}>
          <h1>Welcome👋 </h1>
          <br />
          <div className={styles.text}>
            Welcome to <Link href="/about-us">{"Unnamed [Software]"}</Link> we
            are a small team with a big purpose We have members and programmers
            from all over the{" "}
            <b>
              <Link href="/locations">globe🌏</Link>
            </b>{" "}
            Some importnant members are shown down bellow Please support them
            with their personal projects and endevors!
          </div>
        </div>
        <div className="container">
          <Slider_Comp
            defaultComp={Founders_Profiles[1]}
            comp={Founders_Profiles}
            slidesToShow={3}
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Layout>
    </>
  );
}

// I wish there was a default emoji like this |