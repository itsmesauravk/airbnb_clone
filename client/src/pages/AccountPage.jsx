import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

export default function AccountPage() {
  const [redirect, setRedirect] = useState(null)
  const { user, setUser, ready } = useContext(UserContext)
  let { subpage } = useParams()
  if (subpage === undefined) {
    subpage = "profile"
  }

  async function logout() {
    await axios.post("/logout")
    setUser(null)
    setRedirect("/")
  }

  if (!ready) {
    return "Loading user data..."
  }
  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />
  }

  function linkClasses(type = null) {
    let classes = "py-2 px-4"
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full"
    }
    return classes
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  switch (subpage) {
  }
  return (
    <div>
      <nav className="w-full flex justify-center mt-6 gap-5">
        <Link className={linkClasses("profile")} to={"/account"}>
          My Profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My Accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="mt-8   text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm">
            Log-Out
          </button>
        </div>
      )}
    </div>
  )
}
