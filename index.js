const express = require('express')
const app = express()
const port = 3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})
//localhost = 127.0.0.1
app.listen(port, ()=> console.log(`example app listening at http://localhost:${port}`));