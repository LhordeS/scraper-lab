export type Account = {
  name: string;
  balance: number;
  currency: string;
};

export type ScraperResult = {
  bank: string;
  accounts: Account[];
};
