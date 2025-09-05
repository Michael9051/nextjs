"use client";
import React, { useEffect } from 'react'

import Service from './Service/Service'
import Contact from './Contact/Contact'
import PricingCards from './PriciningCards/PricingCards';
import Company from './Company/Company';
import  Hero  from './Hero/Hero';
import { getDictionary } from '@/lib/dictionary';

interface HomeProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}





//AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


export default function Home({  dictionary }: HomeProps) {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'
      })
    }

    initAOS();
  }, [])

  return (
    <div>
      <Hero  dictionary={dictionary} />
      <Service  dictionary={dictionary} />
      <Company  dictionary={dictionary} />
      <PricingCards  dictionary={dictionary} />
      <Contact  dictionary={dictionary} />
    </div>
  )
}

