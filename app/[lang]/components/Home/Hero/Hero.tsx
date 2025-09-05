import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
import bg from '../../../../../public/images/bg/bg-cover1.jpeg'
import PriceCard from '@/app/[lang]/Helper/PriceCard/PriceCard'
import {getDictionary} from '@/lib/dictionary'

interface HeroProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}




export default function Hero({ dictionary }: HeroProps){
    const {hero} = dictionary;
    return (
        <header >
            <Image src={bg} alt='background picture'  className={styles.header}/>
                <section className={styles.container}>
                    <article className={styles.heroContent} data-aos="zoom-in">
                        <h2 className="tag">{hero.smallTitle}</h2>
                        <h1> <span className={styles.highlightText}>{hero.title1}</span> {hero.title2}</h1>
                        <p>
                            {hero.subtitle}
                        </p>
                    </article>
                </section>

                <PriceCard/>
            
        </header>
  )
}

