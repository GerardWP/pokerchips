const express = require("express");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets - usually for heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routing to 'routes' folder
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
