const express = require("express")
const mongoose = require("mongoose")
const User = require("./models/User")
const bcrypt = require("bcryptjs")
require("dotenv").config()
const cors = require("cors")
const app = express()

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
)
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)

app.get("/test", (req, res) => {
  res.json("Welcome")
})

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body
  try {
    const bcryptSalt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, bcryptSalt)
    const userDoc = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    res.json(userDoc)
  } catch (error) {
    res.status(422).json(error)
  }
})

app.post("/login", async (req, res) => {
  const { email, password } = req.body
  const userDoc = await User.findOne({ email })
  if (userDoc) {
    const checkPassword = bcrypt.compareSync(password, userDoc.password)
    if (checkPassword) {
      res.json("Correct password")
    } else {
      res.json("Incorrect password")
    }
  } else {
    res.json("cannot login")
  }
})

//booking

app.listen(4000, console.log(`Server is listning to port 4000`))
