const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const app = express();
const dotenv = require("dotenv").config();
connectDb();
const port = process.env.PORT || 5000;

//Middlewares
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(express.json()); // this will help recieve clients api body as json
app.use("/api/contacts", require("./routes/contactRoutes")); // this middleware we are using to common out api/contacts
app.use("/api/users", require("./routes/userRoutes")); // this middleware we are using use to common out api/users
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
