import React from 'react'
import styles from './MenuCard.module.css'

const MenuCard = () => {
  return (
    <div className={styles.menuCard}>
      <h2 className={styles.menuTitle}>"Day's Menu"</h2>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>Item 1</li>
        <li className={styles.menuItem}>Item 2</li>
        <li className={styles.menuItem}>Item 3</li>
      </ul>
    </div>
  )
}

export default MenuCard