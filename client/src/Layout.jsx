import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Layout() {
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Header />
      <Outlet />
      {/* outlet is used for the page where in part of outlet other section will be added. */}
    </div>
  )
}
