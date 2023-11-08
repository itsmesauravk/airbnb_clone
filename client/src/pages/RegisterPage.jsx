import { Link } from "react-router-dom"

export default function RegisterPage() {
  return (
    <div className="mt-2 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="mb-2 text-4xl text-center">Register</h1>
        <form className="max-w-xl mx-auto ">
          <input type="text" placeholder="Saurav Karki" />
          <input type="email" placeholder="your@email.com" />
          <input type="password" placeholder="password" />
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
