const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {

   app.use(express.static('client/build'));
 

   const path = require('path');
   app.get('*', (req, res) => {
     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
 }
app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});