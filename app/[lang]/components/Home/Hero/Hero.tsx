'use client'
import React from 'react'
import styles from './Hero.module.css'
// import Image from 'next/image'
// import bg from '../../../../../public/images/bg/bg-cover1.jpeg'
import {getDictionary} from '@/lib/dictionary'
import BackgroundVideo from 'next-video/background-video';
import myVideo from '@/videos/view-video.mp4'

interface HeroProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export default function Hero({ dictionary }: HeroProps){
    const {hero} = dictionary;
    return (
        <header className={styles.header}>
            <BackgroundVideo
                src={myVideo}
                autoPlay
                muted
                loop
                controls={false}
                sizes='80vw'
                className={styles.backgroundVideo}
            />

            <section className={styles.container}>
                <article className={styles.heroContent} data-aos="zoom-in">
                    <h2 className="tag">{hero.smallTitle}</h2>
                    <h1> <span className={styles.highlightText}>{hero.title1}</span> {hero.title2}</h1>
                    <p>
                        {hero.subtitle}
                    </p>
                </article>    
            </section>
            
        </header>
  )
}

