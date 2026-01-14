import React from 'react'
import styles from './MenuCard.module.css'

const MenuCard = () => {

  return (
    <div className={styles.menuCard}>
      <section className={styles.menuFirst}>

        <h2 className={styles.menuTitle} >Menu del Giorno <br /> Tages Menu</h2>
        <p className={styles.menuItem}>
          Conchiglie al Ragu 
          <br />
          Conchiglie mit Ragu
        </p>
        <div className={styles.pasta}></div>
        <p className={styles.menuItem}>
          Scaloppa di maiale alla griglia con patatine fritte e broccoli gratinati
          <br />
          Gegrilltes Schweineschnitzel mit Pommes frites und gratiniertem Brokkoli
        </p>
        <h3 className={styles.menuPrice}>€ 14.90</h3>

      </section>


      <section>

      <h2 className={styles.menuTitle}>Menu Pasta <br /> Nudeln Menu</h2>
      <p className={styles.menuItem}>
          Conchiglie al Ragu 
          <br />
          Conchiglie mit Ragu
      </p>
      <h3 className={styles.menuPrice}>€ 11.90</h3>

      </section>
    </div>
  );
};

export default MenuCard