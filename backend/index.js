const express = require('express')

const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')  
})
app.get('/registration', (req, res) => {
  res.send('This is the registration page')  
})

app.listen(8000, () => {

  console.log('Server is running on port 8000')  
})