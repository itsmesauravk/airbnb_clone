import { Link, useParams } from "react-router-dom"

export default function PlacesPage() {
  const { action } = useParams()
  return (
    <div>
      {action !== "new" && (
        <div className="text-center mt-8">
          <Link
            className="inline-flex gap-1 bg-primary text-white rounded-full p-3"
            to={"/account/places/new"}
          >
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <h2 className="text-xl">Title</h2>
            <p className="text-gray-500 text-sm">
              Title for your place should be short, meaningfull and lovely.
            </p>
            <input
              type="text"
              placeholder="title, for example: My sweet home"
            />
            <h2 className="text-xl">Address</h2>
            <p className="text-gray-500 text-sm">Address to this place.</p>
            <input type="text" placeholder="address" />
            <h2 className="text-xl">Photos</h2>
            <p className="text-gray-500 text-sm">
              Recently clicked photos of this place.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="border p-8 text-2xl rounded-xl">+</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
