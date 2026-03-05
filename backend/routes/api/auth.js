const express = require('express');
const router = express.Router();


  router.get('/', (req, res) => {
    res.send('This is the Auth API route!');
        console.log("INSIDE API ROUTE");
        
  });
  module.exports = router;