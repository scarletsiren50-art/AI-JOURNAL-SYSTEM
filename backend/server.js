const express = require("express");
const cors = require("cors");
require("./database");
const journalRoutes = require("./routes/journalRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/journal", journalRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});