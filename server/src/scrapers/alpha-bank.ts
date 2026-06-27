import type { Account, ScraperResult } from "./types.js";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

type AlphaAccount = {
  accountId: string;
  displayName: string;
  availableBalance: number;
  currencyCode: string;
};

function toAccount(account: AlphaAccount): Account {
  return {
    id: account.accountId,
    name: account.displayName,
    balance: account.availableBalance,
    currency: account.currencyCode,
  };
}

function fetchAccounts(): Promise<AlphaAccount[]> {
  return Promise.resolve([
    {
      accountId: "checking-001",
      displayName: "Main Checking",
      availableBalance: 1523.42,
      currencyCode: "USD",
    },
    {
      accountId: "savings-001",
      displayName: "Savings",
      availableBalance: 10250.0,
      currencyCode: "USD",
    },
  ]);
}

export async function scrapeAlphaBank() {
  await sleep(500);
  const rawAccounts = await fetchAccounts();
  const accounts = rawAccounts.map(toAccount);
  return {
    bank: "Alpha Bank",
    accounts,
  };
}
