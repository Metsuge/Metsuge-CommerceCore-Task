"use client";

import React, { useEffect, useState } from 'react'
import styles from "./page.module.css";

import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Header from './components/Header';

export default function Home() {


  const [isMobile, setIsMobile] = useState(false);
  const [formDivPosition, setFormDivPosition] = useState<number | undefined>(undefined);
  const [overviewDivPosition, setOverviewDivPosition] = useState<number | undefined>(undefined);


  const handleFormDivPosition = (position: number) => {
    setFormDivPosition(position);
    console.log('Position form from child:', position);
  };

  const handleOverviewDivPosition = (position: number) => {
    setOverviewDivPosition(position);
    console.log('Position overview from child:', position);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main id={styles.main}>
      <Header rightPosition={formDivPosition} leftPosition={overviewDivPosition} ></Header>

      <div id={styles.mainSides}>
        <div id={`${styles.left}`} className={`${styles.sides}`}>
          <LeftSide isMobile={isMobile} onFormDivPositionChange={handleFormDivPosition} />
        </div>
        <div id={`${styles.right}`} className={`${styles.sides}`}>
          <RightSide onOverviewDivPositionChange={handleOverviewDivPosition} />
        </div>
      </div>

    </main>
  );
}
