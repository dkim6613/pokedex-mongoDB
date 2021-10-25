const express = require('express');
const router = require('./router.js');
const cors = require('cors');
const app = express();



app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use('/', router);


const port = 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

