import { createFakeBankServer } from "./fake-bank/server.js";

const app = createFakeBankServer();

const port = 3000;

app.listen(postMessage, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
