"use client";
import React, { useEffect, useRef, useState } from 'react'
import styles from "./ProductOverview.module.scss"


interface Props {
  onOverviewDivPositionChange: (position: number) => void;
}

const ProductOverview = ({ onOverviewDivPositionChange }: Props) => {
  const divRef = useRef<HTMLInputElement>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const dropdown = () => {
    setIsExpanded(!isExpanded);
  };

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
    <div >
      <div ref={divRef} id={styles.ProductOverview}
        style={{
          marginBottom: isExpanded ? '16px' : 0
        }}
      >

        <table>
          <tbody>

            <tr id={styles.dropdown} >
              <td style={{
                borderBottom: isExpanded ? '1px solid #E0E0E0' : '0'
              }}>
                Order overview
                <span id={styles.dropdownArrow} onClick={dropdown} className={isExpanded ? styles.arrowDown : styles.arrowRight}><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.00002 3C6.1882 3 6.37636 3.07203 6.51983 3.21578L11.0346 7.74168C11.3218 8.02959 11.3218 8.49637 11.0346 8.78416C10.7475 9.07195 10.282 9.07195 9.99475 8.78416L6.00002 4.77939L2.00526 8.78402C1.71807 9.07181 1.25256 9.07181 0.965503 8.78402C0.678165 8.49623 0.678166 8.02945 0.965503 7.74154L5.48021 3.21564C5.62375 3.07186 5.81191 3 6.00002 3Z" fill="#828282" />
                </svg>
                </span>
              </td>

              <td
                style={{
                  borderBottom: isExpanded ? '1px solid #E0E0E0' : '0'
                }}
              >$299.97</td>
            </tr>

            <tr className={isExpanded ? styles.expand : styles.collapse}>
              <td id={styles.tableItem}>
                <div className={styles.image}>
                  <div className={styles.itemCount}>
                    <div className={styles.itemCountInner}>3</div>
                  </div>
                </div>
                <div className={styles.title}>LogoIpsum IPL</div>
              </td>

              <td id={styles.tableItemPrice}>
                $299.97
              </td>
            </tr>


            <tr className={isExpanded ? styles.expand : styles.collapse}>
              <td>Subtotal</td>
              <td>$299.97</td>
            </tr>


            <tr className={isExpanded ? styles.expand : styles.collapse}>
              <td>Total</td>
              <td>$299.97</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div >
  )
}

export default ProductOverview