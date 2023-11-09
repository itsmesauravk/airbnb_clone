const express = require("express")
const cors = require("cors")
const app = express()

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
)
app.use(express.json())

app.post("/register", (req, res) => {
  const { name, email, password } = req.body
  res.json({ name, email, password })
})

app.listen(4000, console.log(`Server is listning to port 4000`))
