const express = require("express")
const mongoose = require("mongoose")
const User = require("./models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
require("dotenv").config()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const imageDownloader = require("image-downloader")

const app = express()

const jwtSecret = "qwertyuiop123asdf"

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
)
app.use(express.json())
app.use(cookieParser())
app.use("/uploads", express.static(__dirname + "/uploads")) //to show photos in the browser

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
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err
          res.cookie("token", token).json(userDoc)
        }
      )
    } else {
      res.status(422).json("Incorrect password")
    }
  } else {
    res.json("cannot login")
  }
})

app.get("/profile", (req, res) => {
  const { token } = req.cookies
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err
      const { name, email, _id } = await User.findById(userData.id)
      res.json({ name, email, _id })
    })
  } else {
    res.json(null)
  }
})

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true)
})
// console.log(__dirname)
//for downloading image with link
app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body
  const newName = "photo" + Date.now() + ".jpg"
  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads" + newName,
  })
  res.json(newName)
})

//booking
function connectDatabase() {
  //for handling errors
  try {
    mongoose.connect(process.env.MONGO_URL)
    app.listen(4000, console.log(`Server is listning to port 4000`))
  } catch (error) {
    console.log("Couldnot connect to database. " + error)
  }
}

connectDatabase()
