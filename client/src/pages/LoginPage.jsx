import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../UserContext"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  const { setUser } = useContext(UserContext)

  async function handleLoginSubmit(ev) {
    ev.preventDefault()
    try {
      const { data } = await axios.post("/login", { email, password })
      setUser(data)
      setRedirect(true)
      alert("Login sucessfull")
    } catch (e) {
      alert("Login failed !")
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />
  }

  return (
    <div className="mt-2 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="mb-2 text-4xl text-center">Login</h1>
        <form className="max-w-xl mx-auto " onSubmit={handleLoginSubmit}>
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
          <button className="primary text-white">Login</button>
          <div className="text-center text-gray-500 mt-1">
            Don't have account yet?
            <Link className="underline text-primary" to={"/register"}>
              {" "}
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
