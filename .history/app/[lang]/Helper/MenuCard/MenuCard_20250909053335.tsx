import React from 'react'
import styles from './MenuCard.module.css'

const MenuCard = () => {

  return (
    <div className={styles.menuCard}>
      <section>

        <h2 className={styles.menuTitle}>Menu del Giorno <br /> Tages Menu</h2>
        <span className={styles.menuItem}>
          Conchiglie al Ragu 
          <br />
          Conchiglie mit Ragu
        </span>
        <span className={styles.menuItem}>
          Scaloppa di maiale alla griglia con patatine fritte e broccoli gratinati
          <br />
          Gegrilltes Schweineschnitzel mit Pommes frites und gratiniertem Brokkoli
        </span>
        <h3> </h3>

      </section>


      <section>

      <h2 className={styles.menuTitle}>Menu Pasta <br /> Nudeln Menu</h2>
      <span className={styles.menuItem}>
          Conchiglie al Ragu 
          <br />
          Conchiglie mit Ragu
      </span>

      </section>
    </div>
  );
};

export default MenuCard