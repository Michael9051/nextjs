"use client";
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import styles from './ScrollToTop.module.css'

const ScrollToTop = () => {

    const [isVisible, setVisible] = useState(false);
    
    // show and hide functionality
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setVisible(true);
            else setVisible(false);
        }

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);

    },[])

    // scroll functionality
    const scrollToTOp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className={styles.scroll}>
            {isVisible && (
                <button className={styles.button} onClick={scrollToTOp}>
                    <FaArrowUp/>
                </button>
            )}
        </div>
    )
}

export default ScrollToTop