"use client";
import React, { useEffect, useState } from 'react'
import "./Nav.css"
// Links
import { NavLinks } from '@/constant/constant'
// Icons
import Logo from "@/public/images/logos/meborast.jpg"
import Image from 'next/image'
import Link from 'next/link'

import { HiBars3BottomRight } from 'react-icons/hi2'
import LocaleSwitcher from '@/app/[lang]/Helper/NavFormation/LocaleSwitcher';
import ThemeToggle from '@/app/[lang]/Helper/ThemeToggle/ThemeToggle';


// Props
type Props = {
  openNav: () => void;
}

const Nav = ({openNav}:Props) => {
  
  // Hooks
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener('scroll', handler);

    return () => 
    window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section className='nav-container'>
      <nav id="mainHeader" className={`nav ${navBg ? "nav-fix" : "fixed"}`}>
        {/* Logo */}
        <Link href="/" className="images">
            <Image src={Logo} alt="logo meborast" width={100} height={50} className='image'/>
        </Link>
          {/* Links */}
          <div className="menu" id="menu">
              {NavLinks.map((link) => {
                return (
                  
                    <Link
                      key={link.id}
                      href={link.url} 
                      className={`${link.class} adaptive`}
                    >
                      {link.label}
                    </Link>
                  
                )
              })}
          </div>

          {/* Burger Menu */}
          <HiBars3BottomRight 
            onClick={openNav}  
            className='burger'
          />

          {/* Locale Switcher */}
          {/* This component is used to switch between different languages */}
          <LocaleSwitcher/>

          {/* Theme Dark Toggle */}
          <ThemeToggle/>
        </nav>

   </section>
  )
}

export default Nav