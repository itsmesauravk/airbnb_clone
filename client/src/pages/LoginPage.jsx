import { Link } from "react-router-dom"

export default function LoginPage() {
  return (
    <div className="mt-2 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="mb-2 text-4xl text-center">Login</h1>
        <form className="max-w-xl mx-auto ">
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
          <button className="primary">Login</button>
          <div>
            Don't have account yet?
            <Link to={"/register"}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
