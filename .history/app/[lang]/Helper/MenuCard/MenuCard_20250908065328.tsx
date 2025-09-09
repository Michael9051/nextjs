import React from 'react'
import styles from './MenuCard.module.css'

const MenuCard = () => {

  return (
    <div className={styles.menuCard}>
      <h2 className={styles.menuTitle}>Menu del GIorno <br />
        Tages Menu
      </h2>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>a</li>
        <li className={styles.menuItem}>b</li>
        <li className={styles.menuItem}>c</li>
        <li className={styles.menuItem}>d</li>
      </ul>
    </div>
  );
};

export default MenuCard