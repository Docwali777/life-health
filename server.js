const express = require('express');
const app = express()
const path = require('path');
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/*', (req, res)=>{
  const filePath = path.resolve(path.join(__dirname, 'public/index.html'))
  res.sendFile(filePath)
})
app.listen(PORT, ()=>{
  console.log('server running');
})
