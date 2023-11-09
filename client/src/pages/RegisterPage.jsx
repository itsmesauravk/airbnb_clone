import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  async function registerUser(ev) {
    ev.preventDefault()
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      })
      alert("Sucessfully Registred !")
    } catch {
      alert("Registration Unsucessful, Try Again!")
    }
  }
  return (
    <div className="mt-2 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="mb-2 text-4xl text-center">Register</h1>
        <form className="max-w-xl mx-auto " onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Saurav Karki"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />
          <button className="primary text-white">Register</button>
          <div className="text-center text-gray-500 mt-1">
            Already have account?
            <Link className="underline text-primary" to={"/login"}>
              {" "}
              Login{" "}
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
