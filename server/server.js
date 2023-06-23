const express = require("express"); //imports express framework
const axios = require("axios"); //imports axios for HTTP requests
const cors = require("cors"); //imports cors to enable cross-origin resource sharing

const app = express(); //creates an express application
const port = 3001; //setting the port number

app.use(cors()); //enable cors middleware

//setting up the route for handling GET requests to 'api/users'
app.get("/api/users", (req, res) => {
  axios
    .get("https://reqres.in/api/users")
    .then((response) => {
      const users = response.data.data;
      res.json(users);
    })
    .catch((error) => {
      console.error(error); //logging errors for easier bug fixes
      res.status(500).json({ error: "Internal server error" });
    });
});

//starts the server on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
