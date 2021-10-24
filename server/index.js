const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.send('Testing get request from server');
})


app.post('/', (req, res) => {
  res.send('Testing post request from server');
})



app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})