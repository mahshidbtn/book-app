import React from "react";
import styles from "./Layout.module.css"


function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a className={styles.a} href="#">My Site</a> | React Js Test
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Mahshid ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
