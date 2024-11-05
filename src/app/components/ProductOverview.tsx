"use client";
import React, { useEffect, useRef } from 'react'
import styles from "./ProductOverview.module.scss"


interface Props {
  onOverviewDivPositionChange: (position: number) => void;
}

const ProductOverview = ({ onOverviewDivPositionChange }: Props) => {
  const divRef = useRef<HTMLInputElement>(null);


  useEffect(() => {

    const getPositions = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        onOverviewDivPositionChange(rect.right);
      }

    }
    getPositions();


    window.addEventListener('resize', getPositions);
  }, []);


  return (
    <div ref={divRef} className={styles.ProductOverview}>

      <table>
        <tbody>
          <tr>
            <td id={styles.tableItem}>
              <div className={styles.image}>
                <div className={styles.itemCount}>
                  <div className={styles.itemCountInner}>3</div>
                </div>
              </div>
              <div className={styles.title}>LogoIpsum IPL</div>
            </td>
            <td>
              $299.97
            </td>
          </tr>


          <tr>
            <td>Subtotal</td>
            <td>$299.97</td>
          </tr>


          <tr>
            <td>Total</td>
            <td>$299.97</td>
          </tr>
        </tbody>
      </table>
    </div >
  )
}

export default ProductOverview