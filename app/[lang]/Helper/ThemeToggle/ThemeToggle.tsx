"use client";
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi';
import styles from './ThemeToggle.module.css'

const ThemeToggle = () => {
    // State Variables
    const [mounted, setMounted] = useState(false);

    // Information Use Theme
    const {theme, setTheme, systemTheme} = useTheme();

    // UseEffect
    useEffect(() => {
        setMounted(true);
    }, [])

    // Check Mounted
    if (!mounted) return null;

    //Current Theme
    const currentTheme = theme === "system" ? systemTheme : theme;
    
  return (
    <button className={styles.button} onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")} //check is currentTheme Dark then by clicking this change on light and when is light then change to dark
    >

        {/* In this Button Current theme is Dark, when is dark then show sun icons :(otherwise) dark icons*/}
        {currentTheme === "dark" ? (
            <BiSun className={styles.sun}/>
        ) : (
            <BiMoon className={styles.moon}/>
        ) }
    </button>
    
  )
}

export default ThemeToggle