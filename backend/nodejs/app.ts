import express, { Request, Response } from "express";

const app = express();
const port = 3002;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from NodeJS!!");
});

app.listen(port, () => {
  console.log(
    `El servidor de Express está escuchando en http://localhost:${port}/`
  );
});
