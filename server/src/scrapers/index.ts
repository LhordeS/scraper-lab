import { scrapeAlphaBank } from "./alpha-bank.js";
import type { Scraper } from "./types.js";

export const scrapers = {
  alphaBank: scrapeAlphaBank,
};

export type ScraperName = keyof typeof scrapers;

export function getScraper(name: ScraperName): Scraper {
  return scrapers[name];
}
