import { useContext } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate } from "react-router-dom"

export default function AccountPage() {
  const { user, ready } = useContext(UserContext)
  if (!ready) {
    return "Loading user data..."
  }
  if (ready && !user) {
    return <Navigate to={"/login"} />
  }
  return (
    <div>
      <nav className="w-full flex justify-center mt-6 gap-5">
        <Link
          className="py-2 px-4 bg-primary text-white rounded-full"
          to={"/account"}
        >
          My Profile
        </Link>
        <Link className="py-2 px-4" to={"/account/bookings"}>
          My Bookings
        </Link>
        <Link className="py-2 px-4" to={"/account/places"}>
          My Accommodations
        </Link>
      </nav>
    </div>
  )
}
