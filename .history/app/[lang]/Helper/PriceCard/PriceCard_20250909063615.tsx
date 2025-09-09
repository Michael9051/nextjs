"use client"
import React, { useEffect, useState } from 'react'
import styles from './PriceCard.module.css'
import { RiGasStationFill } from 'react-icons/ri'
import { getProductData } from '@/app/[lang]/api/scraper/medium-scraper'


const PriceCard = () => {
    // State to hold product data
    // This state holds the product data fetched from the server
    // It is initialized as an empty array
    const [products, setProducts] = useState<{ name: string; price: string; time: string }[]>([]);

    // Extract target prices from products
    const targetPrices1 = products.map(product => {
        const priceDigit = product.price.split('').slice(0, 1).join('') || "0";
        return parseInt(priceDigit, 10) || 0;
    });
    
    const targetPrices2 = products.map(product => {
        const priceDigits = product.price.split('').slice(2, 4).join('') || "0";
        return parseInt(priceDigits, 10) || 0;
    });
    
    const targetPrices3 = products.map(product => {
        const priceDigit = product.price.split('').slice(4, 5).join('') || "0";
        return parseInt(priceDigit, 10) || 0;
    });

    // Extract names and times from products
    // This extracts the name and time from each product for display
    const time = products.map(product => product.time);
    

    // Counter state
    const [count] = useState(0);

    useEffect(() =>  {

        // Fetch product data
        // This function fetches product data from the server
        const fetchData = async () => {
            try {
                const data = await getProductData();
                setProducts(data ?? []); //Use empty array if data is undefined
            } catch (error) {
                console.error('Error fetching product data:', error);
            } finally {
                console.log('Product data fetch completed');
            }
        };
        fetchData();

    }, []); // Run once on mount
   

    useEffect(() => {
        // Set data-target attributes
        if (products.length > 0) {
                
            // Initialize counters AFTER setting data-target attributes
            const counters = document.querySelectorAll(".pricePart2");
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = parseInt(counter.getAttribute("data-target") as string, 10);
                    const current = parseInt(counter.innerHTML || "0", 10);
                    const increment  = target / 1000;

                    if (current < target) {
                        counter.innerHTML = `${Math.ceil(current + increment)}`;
                        setTimeout(updateCount, 50);
                    }
                    else {
                        counter.innerHTML = `${target}`
                    }
                };
                // Initialize with 0
                counter.innerHTML = "0";
                updateCount();
            });
        }
    }, [products, targetPrices1, targetPrices2, targetPrices3]); // Include all dependencies


  return (
    
            <section className={styles.consultBanner} data-aos="zoom-in" id='service'>
               <ul className={styles.consultLeft}>
                <li>
                    <RiGasStationFill className={styles.gasIcon}/>
                    <h2 className={styles.label}>Benzin</h2>
                    <div className={styles.counterCircle}>
                        <span className="pricePart1" data-target={targetPrices1[0] || "0"}>{targetPrices1[0] || 0}.</span>
                        <span className="pricePart2" data-target={targetPrices2[0] || "0"}>
                            {count}
                        </span>
                        <span className={`${styles.pricePart3} pricePart3`} data-target={targetPrices3[0] || "0"}>
                            {targetPrices3[0] || "0"}
                        </span>
                    </div>
                    <span className={`${styles.timeLabel}`}>{time[0]}</span>
                </li>
                <li>
                    <RiGasStationFill className={styles.gasIcon}/>
                    <h2 className={styles.label}>Diesel</h2>
                    <div className={styles.counterCircle}>
                        <span className="pricePart1" data-target={targetPrices1[1] || "0"}>{targetPrices1[1] || 0}.</span>
                        <span className="pricePart2" data-target={targetPrices2[1] || "0"}>
                            {count}
                        </span>
                        <span className={`${styles.pricePart3} pricePart3`} data-target={targetPrices3[1] || "0"}>
                            {targetPrices3[1] || "0"}
                        </span>
                    </div>
                    <span className={`${styles.timeLabel}`}>{time[1]}</span>
                </li>
                <li>
                    <RiGasStationFill className={styles.gasIcon}/>
                    <h2 className={styles.label}>Metano</h2>
                    <div className={styles.counterCircle}>
                        <span className="pricePart1" data-target={targetPrices1[3] || "0"}>{targetPrices1[3] || 0}.</span>
                        <span className="pricePart2" data-target={targetPrices2[3] || "0"}>
                            {count}
                        </span>
                        <span className={`${styles.pricePart3} pricePart3`} data-target={targetPrices3[3] || "0"}>
                            {targetPrices3[3] || "0"}
                        </span>
                    </div>
                    <span className={`${styles.timeLabel}`}>{time[3]}</span>
                </li>
                <li className={styles.child}>
                    <RiGasStationFill className={styles.gasIcon}/>
                    <h2 className={styles.label}>GPL</h2>
                    <div className={styles.counterCircle}>
                        <span className="pricePart1" data-target={targetPrices1[5] || "0"}>{targetPrices1[5] || 0}.</span>
                        <span className="pricePart2" data-target={targetPrices2[5] || "0"}>
                            {count}
                        </span>
                        <span className={`${styles.pricePart3} pricePart3`} data-target={targetPrices3[5] || "0"}>
                            {targetPrices3[5] || "0"}
                        </span>
                    </div>
                    <span className={`${styles.timeLabel}`}>{time[5]}</span>
                </li>
                <li>
                    <RiGasStationFill className={styles.gasIcon}/>
                    <h2 className={styles.label}>Blue Super</h2>
                    <div className={styles.counterCircle}>
                        <span className="pricePart1" data-target={targetPrices1[6] || "0"}>{targetPrices1[6] || 0}.</span>
                        <span className="pricePart2" data-target={targetPrices2[6] || "0"}>
                            {count}
                        </span>
                        <span className={`${styles.pricePart3} pricePart3`} data-target={targetPrices3[6] || "0"}>
                            {targetPrices3[6] || "0"}
                        </span>
                    </div>
                    <span className={`${styles.timeLabel}`}>{time[6]}</span>
                </li>
                <li>
                    <RiGasStationFill className={styles.gasIcon}/>
                    <h2 className={styles.label}>Blue Diesel</h2>
                    <div className={styles.counterCircle}>
                        <span className="pricePart1" data-target={targetPrices1[7] || "0"}>{targetPrices1[7] || 0}.</span>
                        <span className="pricePart2" data-target={targetPrices2[7] || "0"}>
                            {count}
                        </span>
                        <span className={`${styles.pricePart3} pricePart3`} data-target={targetPrices3[7] || "0"}>
                            {targetPrices3[7] || "0"}
                        </span>
                    </div>
                    <span className={`${styles.timeLabel}`}>{time[7]}</span>
                </li>
               </ul>
        </section>
  )
}

export default PriceCard