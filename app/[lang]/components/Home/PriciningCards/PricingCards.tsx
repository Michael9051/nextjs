import React from 'react'
import styles from './PricingCards.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TbArrowBigLeftLines, TbArrowBigRightLines } from 'react-icons/tb';


import {getDictionary} from '@/lib/dictionary'

//Arrows
import { ButtonGroupProps, DotProps } from 'react-multi-carousel/lib/types';
import { FaCircle } from 'react-icons/fa';



interface CarouselButtonGroupProps extends ButtonGroupProps {
  className: string;
  previous: () => void;
  next: () => void;
}
interface CustomDotsProps extends DotProps {
  onClick: () => void;
}
interface PricingCardsProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}



const CarouselButtonGroup = ({ next, previous }:CarouselButtonGroupProps) => {
  return (
    <div>
      <TbArrowBigLeftLines onClick={() => previous()} className={styles.arrowLeft}/>
       
      <TbArrowBigRightLines onClick={() => next()} className={styles.arrowRight}/>
    </div>
  );
};
const CustomDots = ({ active, onClick }:CustomDotsProps) => {
  return (
    <FaCircle
          className={`${active ? "active" : "inactive"} ${styles.circle}`}
          onClick={() => onClick()}
        />
  )
}



// Setting Slider
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3 ,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  }
};






export default function PricingCards({ dictionary }: PricingCardsProps){
  const {prices} = dictionary;
  return (
    <div className={styles.priceCards}>
        <section className={styles.pricingSection} id="pricing">
            <h4 className="tag1" data-aos="zoom-in">{prices.smallTitle}</h4>
            <h2 className={styles.heading} data-aos="zoom-in">
                {prices.title}
            </h2>

                <Carousel className={styles.pricingCards}
                  arrows={false}
                  customButtonGroup={<CarouselButtonGroup className={''} previous={function (): void {
                    throw new Error('Function not implemented.');
                  } } next={function (): void {
                    throw new Error('Function not implemented.');
                  } } />}

                  showDots={true}
                  customDot={<CustomDots onClick={function (): void {
                    throw new Error('Function not implemented.');
                  } } />}
                  

                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={4000}
                >
                    
                    {/* Program1 */}
                    <div className={styles.pricingCard} data-aos="fade-left">
                        <h3>Program 1:</h3>
                        <h4 className={styles.price}>20€</h4>
                        <ul className={styles.priceFeatures}>
                            <li>{prices.list.program1}</li>
                            <li>{prices.list.program2}</li>
                            <li>{prices.list.program3}</li>
                            <li>{prices.list.program4}</li>
                            <li>{prices.list.program5}</li>
                            <li>{prices.list.program6}</li>
                            <li>{prices.list.program7}</li>
                            <li>{prices.list.program8}</li>
                            <li>{prices.list.program9}</li>
                            <li>{prices.list.program10}</li>
                            <li>{prices.list.program11}</li>
                            <li>{prices.list.program12}</li>
                        </ul>
                    </div>

                    {/* Program2 */}
                    <div className={styles.pricingCard} data-aos="fade-down">
                        <h3>Program 2:</h3>
                        <h4 className={styles.price}>17€</h4>
                        <ul className={styles.priceFeatures}>
                            <li>{prices.list.program1}</li>
                            <li>{prices.list.program2}</li>
                            <li>{prices.list.program3}</li>
                            <li>{prices.list.program4}</li>
                            <li>{prices.list.program5}</li>
                            <li>{prices.list.program6}</li>
                            <li>{prices.list.program7}</li>
                            <li>{prices.list.program8}</li>
                            <li>{prices.list.program9}</li>
                            <li>{prices.list.program10}</li>
                            <li className={styles.disabled}>{prices.list.program11}</li>
                            <li>{prices.list.program12}</li>
                        </ul>
                    </div>

                    {/* Program3 */}
                    <div className={styles.pricingCard} data-aos="fade-right">
                        <h3>Program 3::</h3>
                        <h4 className={styles.price}>15€</h4>
                        <ul className={styles.priceFeatures}>
                            <li>{prices.list.program1}</li>
                            <li>{prices.list.program2}</li>
                            <li>{prices.list.program3}</li>
                            <li>{prices.list.program4}</li>
                            <li>{prices.list.program5}</li>
                            <li>{prices.list.program6}</li>
                            <li className={styles.disabled}>{prices.list.program7}</li>
                            <li>{prices.list.program8}</li>
                            <li>{prices.list.program9}</li>
                            <li>{prices.list.program10}</li>
                            <li className={styles.disabled}>{prices.list.program11}</li>
                            <li>{prices.list.program12}</li>
                        </ul>
                    </div>

                    {/* Program4 */}
                    <div className={styles.pricingCard} data-aos="fade-right">
                        <h3>Program 4:</h3>
                        <h4 className={styles.price}>11€</h4>
                        <ul className={styles.priceFeatures}>
                            <li>{prices.list.program1}</li>
                            <li>{prices.list.program2}</li>
                            <li>{prices.list.program3}</li>
                            <li>{prices.list.program4}</li>
                            <li>{prices.list.program5}</li>
                            <li>{prices.list.program6}</li>
                            <li className={styles.disabled}>{prices.list.program7}</li>
                            <li>{prices.list.program8}</li>
                            <li>{prices.list.program9}</li>
                            <li className={styles.disabled}>{prices.list.program10}</li>
                            <li className={styles.disabled}>{prices.list.program11}</li>
                            <li>{prices.list.program12}</li>
                        </ul>
                    </div>

                    {/* Program5 */}
                    <div className={styles.pricingCard} data-aos="fade-right">
                        <h3>Program 5:</h3>
                        <h4 className={styles.price}>9€</h4>
                        <ul className={styles.priceFeatures}>
                            <li className={styles.disabled}>{prices.list.program1}</li>
                            <li>{prices.list.program2}</li>
                            <li>{prices.list.program3}</li>
                            <li className={styles.disabled}>{prices.list.program4}</li>
                            <li>{prices.list.program5}</li>
                            <li>{prices.list.program6}</li>
                            <li className={styles.disabled}>{prices.list.program7}</li>
                            <li>{prices.list.program8}</li>
                            <li>{prices.list.program9}</li>
                            <li className={styles.disabled}>{prices.list.program10}</li>
                            <li className={styles.disabled}>{prices.list.program11}</li>
                            <li>{prices.list.program12}</li>
                        </ul>
                    </div>

                    {/* Program6 */}
                    <div className={`${styles.pricingCard} ${styles.highlight}`} data-aos="fade-right">
                        <h3>Program 6:</h3>
                        <h4 className={styles.price}>13€</h4>
                        <span className={styles.bestChoice}>{prices.check}</span>
                        <ul className={styles.priceFeatures}>
                            <li>{prices.list.program1}</li>
                            <li>{prices.list.program2}</li>
                            <li>{prices.list.program3}</li>
                            <li>{prices.list.program4}</li>
                            <li>{prices.list.program5}</li>
                            <li>{prices.list.program6}</li>
                            <li>{prices.list.program7}</li>
                            <li>{prices.list.program8}</li>
                            <li>{prices.list.program9}</li>
                            <li className={styles.disabled}>{prices.list.program10}</li>
                            <li className={styles.disabled}>{prices.list.program11}</li>
                            <li>{prices.list.program12}</li>
                        </ul>
                    </div>

                </Carousel>
        </section>
    </div>
  )
}

