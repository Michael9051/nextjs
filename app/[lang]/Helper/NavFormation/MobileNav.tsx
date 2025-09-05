import React from 'react'
// Links
import { NavLinks } from '@/constant/constant';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
import "./MobileNav.css"


type Props = { 
  showNav: boolean;
  closeNav: () => void; 
}
const MobileNav = ({closeNav, showNav}:Props) => {
 // Variables
 const navOpen = showNav ? "off" : "on";
  return (
    <div>
      {/* Overlay */}
      <div className={`${navOpen} overlay `}></div>

        {/* navLinks */}
        <div className={`${navOpen} navLinks `} > 
          {NavLinks.map((link) => {
            return (
              
                <Link
                  key={link.id}
                  href={link.url} 
                  className={`${link.class} links `}
                >
                  {link.label}
                </Link>  
            )
          })}
          {/* Close Icon */}
          <CgClose onClick={closeNav} className="close" />
        </div>
    </div>
  );
};

export default MobileNav