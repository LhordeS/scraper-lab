export type Account = {
  id: string,
  name: string;
  balance: number;
  currency: string;
};

export type ScraperResult = {
  bank: string;
  accounts: Account[];
};

export type Scraper = () => Promise<ScraperResult>;
