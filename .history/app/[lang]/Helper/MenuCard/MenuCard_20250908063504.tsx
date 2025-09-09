import React from 'react'
import styles from './MenuCard.module.css'

const MenuCard = () => {

  return (
    <div className={styles.menuCard}>
      <h2 className={styles.menuTitle}>Menu</h2>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}></li>
        <li className={styles.menuItem}>{menu.title2}</li>
        <li className={styles.menuItem}>{menu.title3}</li>
        <li className={styles.menuItem}>{menu.title4}</li>
      </ul>
    </div>
  );
};

export default MenuCard