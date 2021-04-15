import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Field, Form, Formik } from "formik";

import BetaLogo from "../../utils/img/betaBlack.png";

import styles from "../../styles/Beta.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const beta = () => {
  return (
    <>
      <Head>
        <title>BetaX</title>
        <script>document.body.style.backgroundColor = "black"</script>
      </Head>
      <main className={styles.main}>
        <Image src={BetaLogo} height="120" width="452"></Image>
        <div className={styles.outline}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              // alert(JSON.stringify(values, null, 2));
              alert("BETAX IS CURRENTLY UNAVAILABLE PLEASE CONTACT US AT: SUPPORT@UNNAMEDSOFTWARE.COM")
            }}
          >
            <Form className={styles.form}>
              <div className={styles.formSpaceDivider}>
                <label htmlFor="userNameOrEmail">Username Or Email</label>
                <Field
                  id="userNameOrEmail"
                  name="userNameOrEmail"
                  placeholder="Joe"
                />
              </div>

              <div className={styles.formSpaceDivider}>
                <label htmlFor="password">Password</label>
                <Field id="password" name="password" type="password" placeholder="Mama" />
              </div>

              <button type="submit">Submit</button>
            </Form>
          </Formik>
          <div
            style={{ paddingLeft: "10px", marginRight: "auto" }}
            className={styles.formSpaceDivider}
          >
            <Link href="/">Go Home</Link>
          </div>
        </div>

      </main>
      <footer className={styles.footer}>
        <Link href="/">
          <a>Made with ♥ from Unnamed{"[software]"}</a>
        </Link>
      </footer>
    </>
  );
};

export default beta;
