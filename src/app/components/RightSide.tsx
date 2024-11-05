"use client";

import React, { useEffect, useState } from 'react';
import ProductOverview from './ProductOverview';
import EndText from './EndText';


interface Props {
  onOverviewDivPositionChange: (position: number) => void;
}

export default function RightSide({ onOverviewDivPositionChange }: Props) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div >
      <ProductOverview onOverviewDivPositionChange={onOverviewDivPositionChange} />
      {!isMobile && <EndText />}
    </div>
  );
}
