import express from 'express';

const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello, ' + req.body.name + ' from a GET endpoint!');
})

app.post('/hello', (req, res) => {
  res.send("Hello from a POST endpoint!")
})

app.listen(8000, function() {
  console.log("server is listening on port 8000");
})