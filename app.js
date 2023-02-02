require("dotenv").config();
const express = require('express');
const cors = require('cors')
const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json());

app.use("/api", require("./server/routes/dialogFlow"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})