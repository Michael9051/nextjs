import React from 'react'
import styles from './Company.module.css'
import Image from 'next/image'
import { getDictionary } from '@/lib/dictionary'
import MenuCard from '@/app/[lang]/Helper/MenuCard/MenuCard'


// Images
import cr1 from '../../../../../public/images/croas1.png'
import cr2 from '../../../../../public/images/croas2.png'
import cr3 from '../../../../../public/images/croas3.png'
import cr4 from '../../../../../public/images/apple.png'

interface CompanyProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export default function Company({ dictionary }: CompanyProps){
  const { company } = dictionary;
  
  return (
    <div className={styles.foodSection} id='restaurant'>
      <section className={styles.foodContainer}>

        <ul className={styles.images} data-aos="zoom-out">
          <li><Image src={cr1} width={100} height={100} alt='croissant' /></li>
          <li><Image src={cr2}  width={100} height={100} alt='croissant' /></li>
          <li><Image src={cr3}  width={100} height={100} alt='croissant' /></li>
          <li><Image src={cr4}  width={100} height={100} alt='croissant' /></li>
        </ul>

        <article className={styles.foodInfo} data-aos="fade-left">
          <h3 className="tag">{company.smallTitle}</h3>
          <h2 className='heading'>{company.title1}</h2>
          <h4>{company.title2}</h4>
          <p>{company.description}</p>

          <div className={styles.kitchen}>
             <div className={styles.priceContainer}>
              <h3 >{company.title4}</h3>
              <span>14,90 €</span>
            </div>

            <div className={styles.kitchenTime}>
              <h3>{company.title3}</h3>
              <span>11:45 - 14:30</span>
            </div>
          </div>

        </article>

      </section>

      <div className={styles.menuCard} data-aos="fade-up">
        <MenuCard />
      </div>
    </div>
  )
}