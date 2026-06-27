import { scrapeAlphaBank } from "./alpha-bank.js";
import { scrapeBetaBank } from "./beta-bank.js";
import type { Scraper } from "./types.js";

export const scrapers = {
  alpha: scrapeAlphaBank,
  beta: scrapeBetaBank,
};

export type ScraperName = keyof typeof scrapers;

export function getScraper(name: ScraperName): Scraper {
  return scrapers[name];
}

export function isScraperName(name: string): name is ScraperName {
  return name in scrapers;
}
