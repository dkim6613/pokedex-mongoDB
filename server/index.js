const express = require('express');
const router = require('./router.js');
const app = express();
const port = 3000;
app.use(express.json());

app.use(express.static('public'));
app.use('/', router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

