"use server"

import puppeteer, {Browser, Page} from "puppeteer";

// export async function getProductData(): Promise<{ name: string; price: string; time: string }[]>{
export async function getProductData(): Promise<{ name: string; price: string; time: string }[]> {
    let browser: Browser | null = null;
    let page: Page | null = null;


    try {
        // Launch a new browser instance (open a blank page)
        browser = await puppeteer.launch(
            {
                headless: true, // Run in headless mode
                args: ['--no-sandbox', '--disable-setuid-sandbox'], // Add necessary arguments for Puppeteer
                defaultViewport: null, // Use the default viewport size
                executablePath: '/usr/bin/google-chrome', // Specify the path to the Chrome executable
            }
        );
       

        if (!browser) {
            throw new Error("Failed to launch Puppeteer.");
        }

        // Create Page
        page = await browser.newPage(); 

        // Set a longer timeout for page navigation
        page.setDefaultNavigationTimeout(2 * 10 * 1000);

        // Go to URL
        await page.goto('https://www.alvolante.it/prezzo-carburante/trentino-alto-adige/bolzano/agip-eni-meborast-49587', { waitUntil: 'networkidle2' });

        // Wait for the table to load
        await page.waitForSelector('table > tbody > tr');

        

        // Extract product data
        const productData = await page.evaluate(() => {
            const products: { name: string; price: string; time: string; }[] = [];
            const rows = document.querySelectorAll('table > tbody > tr');
            
            rows.forEach(row => {
                const name = row.querySelector('td:nth-child(1)')?.textContent?.trim() || '';
                const price = row.querySelector('td:nth-child(2)')?.textContent?.trim() || '';
                const time = row.querySelector('td:nth-child(3)')?.textContent?.trim() || '';

                products.push({ name, price, time });
            });
            

            // Return the array of product objects
            return products;

        });
       
        // Return the product data
        return productData;

    } catch (error) {
        // catch errors
        console.error('Error extracting product data:', error);

        // In case of an error, you can return an empty array or throw an error
        // throw  Error('Failed to extract product data');
        return [];

    }
    finally {
        // Close Page First
        if (page) {
        await page.close();
        }

        // Close Browser After Page
        if (browser) {
        await browser.close();
        }
    }
    
}


