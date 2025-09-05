"use client";
import React, { useState } from 'react'
import Nav from '@/app/[lang]/components/Home/Navbar/Nav'
import MobileNav from './MobileNav'



export default function ResponsiveNav() {

  // Declaration State Variables
  const [showNav, setShowNav] = useState(false);

  // Functions
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      {/* SetProps in Components */}
      <Nav openNav={openNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  );
};

