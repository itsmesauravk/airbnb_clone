import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import PlacesPage from "./PlacesPage"

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
    let classes = "inline-flex gap-1 py-2 px-4 rounded-full"
    if (type === subpage) {
      classes += " bg-primary text-white "
    } else {
      classes += "bg-gray-200"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          My Profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
            />
          </svg>
          My Bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
          </svg>
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
      {subpage === "places" && <PlacesPage />}
    </div>
  )
}
