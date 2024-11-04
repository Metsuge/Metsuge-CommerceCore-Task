import React from 'react';
import ProductOverview from './ProductOverview';

import styles from "./ProductOverview.module.scss"
import EndText from './EndText';
export default function RightSide() {
  return (
    <div >
      <ProductOverview />
      <EndText />
    </div>
  );
}
