"use server"

import puppeteer, {Browser, Page} from "puppeteer";

// export async function getProductData(): Promise<{ name: string; price: string; time: string }[]>{
export async function getProductData(): Promise<{ name: string; price: string; time: string }[]> {
    let browser: Browser | null = null;
    let page: Page | null = null;


    try {
        browser = await puppeteer.launch({
            headless: true,
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
       

        if (!browser) {
            throw new Error("Failed to launch Puppeteer.");
        }

        // --- CREATE PAGE ---
        page = await browser.newPage(); 

        // Set a longer timeout for page navigation
        page.setDefaultNavigationTimeout(2 * 10 * 1000);

        // --- GO TO URL ---
        await page.goto('https://www.alvolante.it/prezzo-carburante/trentino-alto-adige/bolzano/agip-eni-meborast-49587');

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
        // --- CATCH ERRORS ---
        console.error('Error extracting product data:', error);

        // In case of an error, you can return an empty array or throw an error
        // throw  Error('Failed to extract product data');
        return [];

    }
    finally {
        // --- CLOSE PAGE FIRST ---
        if (page) {
        await page.close();
        }

        // --- CLOSE BROWSER AFTER PAGE ---
        if (browser) {
        await browser.close();
        }
    }
    
}


