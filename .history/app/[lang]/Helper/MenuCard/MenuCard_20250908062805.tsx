import React from 'react'
import styles from './MenuCard.module.css'
import { getDictionary } from '@/lib/dictionary'

interface MenuCardProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const MenuCard: React.FC<MenuCardProps> = ({ dictionary }) => {
  const { menu } = dictionary;
  return (
    <div className={styles.menuCard}>
      <h2 className={styles.menuTitle}>{menu.smallTitle}</h2>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>{menu.title1}</li>
        <li className={styles.menuItem}>{menu.title2}</li>
        <li className={styles.menuItem}>{menu.title3}</li>
        <li className={styles.menuItem}>{menu.title4}</li>
      </ul>
    </div>
  );
};

export default MenuCard