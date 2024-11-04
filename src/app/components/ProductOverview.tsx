import React from 'react'
import styles from "./ProductOverview.module.scss"

const ProductOverview = () => {
  return (
    <div className={styles.ProductOverview}>
      <div className={styles.item}>
        <div className={styles.image}>
          <div className={styles.itemCount}>
            <div className={styles.itemCountInner}>3</div>
          </div>
        </div>

        <div className={styles.title}>LogoIpsum IPL</div>
        <div className={styles.price}>$299.97</div>
      </div>

      <table>
        <tbody>
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
    </div>
  )
}

export default ProductOverview