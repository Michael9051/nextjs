import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import ceo from '@/public/images/ceo.png'
import styles from './Service.module.css'
import {getDictionary} from '@/lib/dictionary'

// React Icons
import { FaCheck, FaOilCan} from 'react-icons/fa'
import { TbChecklist } from 'react-icons/tb'
import { GiAutoRepair } from 'react-icons/gi'
import { MdLocalCarWash } from 'react-icons/md'
import PriceCard from '@/app/[lang]/Helper/PriceCard/PriceCard'


// Background
import bg from '@/public//images/bg/back.png'





interface ServiceProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

const style={
      backgroundImage: `url(${bg.src})`,
    }

export default function Service({ dictionary }: ServiceProps){
    const { service } = dictionary;
  return (
    <section className={styles.serviceSection} style={style}>
        <PriceCard/>
            <div className={styles.serviceContainer}>

                <article className={styles.serviceLeft} data-aos="fade-left">
                    <h3 className="tag1">{service.smallTitle}</h3>
                    <h2 className={styles.heading}><span>{service.title1}</span> {service.title2} <br /> {service.title3}</h2>
                    <p className={styles.content}>{service.description}</p>
                    <ul className={styles.ulList}>
                        <li className={styles.list}><FaCheck className={styles.checkIcons}/> {service.check1}</li>
                        <li className={styles.list}><FaCheck className={styles.checkIcons}/> {service.check2}</li>
                        <li className={styles.list}><FaCheck className={styles.checkIcons}/> {service.check3}</li>
                    </ul>
                    <figure className={styles.profile}>
                        <Image src={ceo} width={150} height={150} alt="user picture" className={`image ${styles.userPicture}`}/>
                        <span className={styles.owner}>
                            <strong>Richard Kompatscher</strong> <br />
                            CEO, Director
                        </span>
                        <div className={styles.serviceButton}>
                            <Link href={"#contact"} className={`btn btn-primary ${styles.button}`}>{service.button}</Link>
                        </div>
                    </figure>
                </article>

                <ul className={styles.serviceCards} data-aos="fade-right">
                    <li className={styles.card}>
                        <FaOilCan className={styles.icon}/>
                        <h3 className={styles.iconTitle}>{service.list.service1}</h3>
                    </li>
                    <li className={styles.card}>
                        <MdLocalCarWash  className={styles.icon}/>
                        <h3 className={styles.iconTitle}>{service.list.service2}</h3>
                    </li>
                    <li className={styles.card}>
                        <GiAutoRepair className={styles.icon}/>
                        <h3 className={styles.iconTitle}>{service.list.service3}</h3>
                    </li>
                    <li className={styles.card}>
                        <TbChecklist className={styles.icon}/>
                        <h3 className={styles.iconTitle}>{service.list.service4}</h3>
                    </li>
                </ul>

            </div>
        </section>
  )
}
