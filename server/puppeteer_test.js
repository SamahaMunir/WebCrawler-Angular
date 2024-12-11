const puppeteer = require('puppeteer');

(async () => {
    try {
        console.log('Launching Puppeteer...');
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        console.log('Navigating to BBC News...');
        await page.goto('https://www.bbc.com/news', { waitUntil: 'domcontentloaded' });
        console.log('Page loaded.');

        const data = await page.evaluate(() => {
            const headlines = [];
            // Adjust these selectors based on the page structure
            const headlineElements = document.querySelectorAll('h3.some-headline-class');
            const descriptionElements = document.querySelectorAll('p.some-description-class');

            headlineElements.forEach((headlineElement, index) => {
                const heading = headlineElement.innerText.trim();
                const description = descriptionElements[index]?.innerText.trim();
                if (heading) {
                    headlines.push({ heading, description });
                }
            });
            return headlines;
        });

        console.log('Scraped Data:', data);
        await browser.close();
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
