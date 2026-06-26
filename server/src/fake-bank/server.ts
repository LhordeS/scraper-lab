import express from "express";

export function createFakeBankServer() {
  const app = express();

  app.get("/", (_req, res) => {
    res.send(`
       <!DOCTYPE html>
      <html>
        <head>
          <title>Alpha Bank</title>
        </head>
        <body>
          <h1>Alpha Bank</h1>
          <div id="balance">$2,315.42</div>
        </body>
      </html>
      `);
  });
  return app;
}
