import React from 'react'
import styles from "./page.module.css";

import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Header from './components/Header';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <div className={`${styles.left} ${styles.sides}`}>
        <LeftSide />
      </div>
      <div className={`${styles.right} ${styles.sides}`}>
        <RightSide />
      </div>
    </main>
  );
}
