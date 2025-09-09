import React from 'react'
import styles from './MenuCard.module.css'

const MenuCard = () => {

  return (
    <div className={styles.menuCard}>
      <h2 className={styles.menuTitle}>Menu del Giorno <br /> Tages Menu</h2>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          Conchiglie al Ragu 
          <br />
          Conchiglie mit Ragu
        </li>
        <li className={styles.menuItem}>
          Scaloppa di maiale alla griglia con patatine fritte e broccoli gratinati
          <br />
          Gegrilltes Schweineschnitzel mit Pommes frites und gratiniertem Brokkoli
        </li>
      </ul>
    </div>
  );
};

export default MenuCard