import type { Account, ScraperResult } from "./types.js";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function fetchAccounts(): Promise<Account[]> {
  return Promise.resolve([
    {
      id: "checking-001",
      name: "Everyday Checking",
      balance: 1240.5,
      currency: "USD",
    },
    {
      id: "savings-001",
      name: "Emergency Savings",
      balance: 8200,
      currency: "USD",
    },
  ]);
}

export async function scrapeBetaBank() {
  await sleep(500);
  const accounts = await fetchAccounts();
  return {
    bank: "Beta Bank",
    accounts,
  };
}
