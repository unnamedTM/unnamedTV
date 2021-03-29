import React from "react";

import styles from "../../styles/Home.module.css";
import select from "../../styles/reactSelect.module.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-dropdown/style.css";

import Link from "next/link";
import Dropdown from "react-dropdown";

import { languageOptions } from "../data/selectData";
const defaultOption = languageOptions[1];



const Layout = ({ children }) => {
  


  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarMaxWidth}>
          
          <Link href="/">
            {/* <a href=""> */}
            {/* <h5 className={styles.title}>WASH🚻</h5> */}
            <h5 className={styles.title}>Unnamed{"[tv]"}</h5>
            {/* </a> */}
          </Link>
          <Dropdown
            options={languageOptions}
            // onChange={console.log(languageOptions)}
            value={defaultOption}
            placeholder="Select an option"
            className={select.dropdown}
          />
        </div>
      </nav>
      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerMaxWidth}>
          <a
            href="/about-us"
            rel="noopener noreferrer"
          >
            Powered by {"Unnamed[Software]"}
            {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
          </a>
          <Link href="/beta">BetaX</Link>
        </div>
      </footer>
    </>
  );
};

export default Layout;
