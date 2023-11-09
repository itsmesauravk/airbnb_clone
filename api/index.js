const express = require("express")
const app = express()

app.get("/test", (req, res) => {
  res.json("test okk")
})

app.listen(4000, console.log(`Server is listning to port 4000`))
