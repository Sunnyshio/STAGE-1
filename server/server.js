const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.get('/api/users', (req, res) => {
    axios
      .get('https://reqres.in/api/users')
      .then(response => {
        const users = response.data.data;
        res.json(users);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      });
  });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
