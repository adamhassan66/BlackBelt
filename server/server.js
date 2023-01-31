const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
origin: "http://localhost:3000"
}))

require("./config/mongoose.config");
require("./routes/pet.routes")(app);

const port = 8001;

app.listen(port, () => console.log(`Listening on port ${port}!`));