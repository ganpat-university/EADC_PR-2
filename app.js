const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('this is a code by Kshitij Gupta to test pipeline and this is the third version');
  });
  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});