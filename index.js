const express = require('express');
const cors = require('cors');
 
const app = express();
const port = 3003;  

app.use(cors());

app.get('/proxy', async (req, res) => {
  console.log("req sent......");
  const apiUrl = req.query.url;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error during fetch:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
