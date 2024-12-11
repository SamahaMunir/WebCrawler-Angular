import express from "express";
import puppeteer from "puppeteer";
import cors from "cors";

const app = express();
const PORT = 3001;

// Enable CORS to allow requests from other origins
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:4200", // Only allow Angular app
    methods: "GET",
    credentials: true,
  }),
);
// Root endpoint to indicate the server is running
app.get("/", (req, res) => {
  res.json({ message: "Server is running. Use /scraper to fetch data." });
});

const BBC_NEWS_URL = "https://www.bbc.com/news";

app.get("/scraper", async (req, res) => {
  try {
    console.log("Launching Puppeteer...");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log("Navigating to BBC News...");
    await page.goto(BBC_NEWS_URL, { waitUntil: "networkidle2" });
    console.log("Page loaded.");

    const articles = await page.evaluate(() => {
      const data = [];

      // Fetch all headline elements
      const headlineElements = document.querySelectorAll(
        'h2[data-testid="card-headline"]',
      );
      // Fetch all description elements
      const descriptionElements = document.querySelectorAll(
        'p[data-testid="card-description"]',
      );

      // Combine headlines and descriptions
      headlineElements.forEach((headlineElement, index) => {
        const heading = headlineElement.innerText.trim();
        const description =
          descriptionElements[index] &&
          descriptionElements[index].innerText.trim();

        if (heading) {
          data.push({ heading, description });
        }
      });

      return data;
    });

    console.log("Scraped Data:", articles);
    await browser.close();
    res.json(articles);
  } catch (error) {
    console.error("Error during scraping:", error.message);
    res.status(500).json({ error: "Failed to scrape data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
