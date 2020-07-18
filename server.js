const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

require("./routes/apiRoute.js")(app);
require("./routes/htmlRoute.js")(app);

app.listen(PORT, () => {
  console.log(`API server now on PORT : ${PORT}`);
});