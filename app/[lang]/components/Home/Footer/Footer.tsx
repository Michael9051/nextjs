"use client"
import React from 'react'
import styles from './Footer.module.css'
import logo from '../../../../../public/images/logos/meborast.jpg'
import Image from 'next/image'
import Link from 'next/link'

//React Icons
import { FaEnvelope,FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

// Background
import bg from '../../../../../public/images/bg/back.png'

const style={
      backgroundImage: `url(${bg.src})`,
}

interface FooterProps {
  handleShowModal: () => void;
}

export default function Footer({ handleShowModal }: FooterProps) {

  return (
    
    <section className={styles.footer} style={style}>
        <div className={styles.footerContainer}>
            
            <div className={styles.footerColumn}>
                    <Link href="#">
                        <Image src={logo} alt="logo meborast" width={150} height={100} className={styles.logo}/>
                    </Link>
                    <h2><span className={styles.highlightText}>MeBo</span> Rast</h2>
            </div>

            <div className={styles.footerColumn}>
                <h4>Contact</h4>
                <ul>
                    <li>
                        <FaMapMarkedAlt className={styles.icons}/>
                        SS 38 km221, Mebo, <br/>
                        39057 Appiano s.s.d. Vino (BZ)
                    </li>
                    <li>
                        <FaPhone className={styles.icons}/>
                        +39 0471633680
                    </li>
                    <li>
                        <FaEnvelope className={styles.icons}/>
                        info@meborast.eu
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.privacyButton}>
            <button 
                onClick={handleShowModal} 
                className={styles.button}
            >
                Privacy Policy
            </button>
        </div>
        <div className={styles.footerBottom}>
                <h4> @2025 - <span> Michal Sivec</span> by. All Rights Reserved.</h4>
        </div>
    </section>
  )
}

