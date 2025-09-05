"use client"
import React, { Suspense } from 'react'
import styles from './Contact.module.css'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import ContactForm from '@/app/[lang]/Helper/ContactForm/ContactForm'
import { getDictionary } from '@/lib/dictionary';

interface ContactProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export default function Contact({ dictionary }: ContactProps){
    const { contact } = dictionary;
  return (
    <section className={styles.contactSection} id="contact">
            <div className={styles.contactContainer}>
                <article className={styles.contactInfo} data-aos="fade-left">
                    <h3 className="tag">{contact.smallTitle}</h3>
                    <h2 >
                        {contact.title1}
                    </h2>
                    <p className={styles.description}>{contact.description}</p>

                    <div className={styles.contactDetail}>
                        <FaMapMarkedAlt className={styles.icons}/>
                        <h3>
                            <strong>{contact.address}</strong><br/>
                            <span className={styles.description}>SS 38 km221, Mebo, <br/>
                                39057 Appiano s.s.d. Vino (BZ)
                            </span>
                        </h3>
                    </div>
                    <div className={styles.contactDetail}>
                        <FaPhone className={styles.icons}/>
                        <h3>
                            <strong>{contact.phone}</strong><br/>
                            <span className={styles.description}>
                                +39 0471633680
                            </span>
                        </h3>
                    </div>
                    <div className={styles.contactDetail}>
                        <FaEnvelope className={styles.icons}/>
                        <h3>
                            <strong>{contact.email}</strong><br/>
                            <span className={styles.description}>info@meborast.eu</span>
                        </h3>
                    </div>

                </article>

                <section className={styles.form} id="contactForm" data-aos="fade-right">
                    <h3>{dictionary.contact.form}</h3>
                    <p>{dictionary.contact.formDescription}</p>

                    {/* suspense is new feature */}
                    <Suspense fallback="Loading...">
                        <ContactForm/>
                    </Suspense>

                </section>
            </div>
        </section>
  )
}
