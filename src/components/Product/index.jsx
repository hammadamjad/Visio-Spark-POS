import React from 'react'
import styles from './style.module.css'


const Product = ({ product }) => {
  return (
    <div className={`${styles.container} dark-bg-2 p-5 d-flex flex-column align-items-center`}>
        <img className={styles.img} src="./product-1.svg" alt="" />
        <div className="body-normal-medium white">{product.name}</div>
        <div className="body-normal-regular white">${product.price}</div>
        <div className="body-normal-regular text-light">{product.quantity} bowls available</div>
    </div>
  )
}

export default Product