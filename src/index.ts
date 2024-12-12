import express, { type Request, type Response, type Application } from 'express';
const app: Application = express();
const port = 3001;

app.get('/', (_req: Request, res: Response) => {
  res.send(`${process.env.HOGE_VALUE} Hello World!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
