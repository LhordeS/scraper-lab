import type { Account, ScraperResult } from "./types.js";

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

type BetaAccount = {
  accountId: string;
  label: string;
  currentAmount: number;
  isoCurrency: string;
}

function toAccount(account: BetaAccount): Account {
  return {
    id: account.accountId,
    name: account.label,
    balance: account.currentAmount,
    currency: account.isoCurrency
  }
}

function fetchAccounts(): Promise<BetaAccount[]> {
  return Promise.resolve([
    {
      accountId: "checking-001",
      label: "Main Checking",
      currentAmount: 1240.5,
      isoCurrency: "USD",
    },
    {
      accountId: "savings-002",
      label: "High Interest Savings",
      currentAmount: 8200,
      isoCurrency: "USD",
    },
  ]);
}

export async function scrapeBetaBank() {
  await sleep(500);
  const rawAccounts = await fetchAccounts()
  const accounts = rawAccounts.map(toAccount);
  return {
    bank: "Beta Bank",
    accounts,
  };
}
