import { useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function PlacesPage() {
  const { action } = useParams()
  const [title, setTitle] = useState("")
  const [address, setAddress] = useState("")
  const [addedPhotos, setAddedPhotos] = useState([])
  const [photoLink, setPhotoLink] = useState("")
  const [description, setDescription] = useState("")
  const [perks, setPerks] = useState([])
  const [extraInfo, SetExtraInfo] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [maxGuests, setMaxGuests] = useState("")

  function inputHeader(text) {
    return <h2 className="text-xl">{text}</h2>
  }
  function inputDesc(text) {
    return <p className="text-gray-500 text-sm">{text}</p>
  }

  function preInput(header, desc) {
    return (
      <>
        {inputHeader(header)}
        {inputDesc(desc)}
      </>
    )
  }

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
            {preInput(
              "Title",
              "Title for your place should be short, meaningfull and lovely."
            )}
            <input
              type="text"
              placeholder="title, for example: My sweet home"
            />

            {preInput("Address", "Address to this place.")}
            <input type="text" placeholder="address" />

            {preInput("Photos", "Recently clicked photos of this place.")}
            <div className="flex gap-2">
              <input type="text" placeholder="Add using a Link..." />
              <button className="bg-primary px-4 rounded-full text-white ">
                Add&nbsp;photo
              </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <button className="flex gap-2 justify-center border p-8 text-2xl rounded-xl">
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Upload
              </button>
            </div>

            {preInput(
              "Description",
              "Short and Sweet description about this place."
            )}
            <textarea />

            {preInput("Perks", " Select all the perks of this place.")}

            <div className="grid gap-2 grids-col-2 md:grid-cols-4 lg:grid-cols-6">
              <label className="border p-2 flex gap-2 rounded-md">
                <input type="checkbox" />
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
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>

                <span>Free Wifi</span>
              </label>
              <label className="border p-2 flex gap-2 rounded-md">
                <input type="checkbox" />
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
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>

                <span>Free Parking area</span>
              </label>
              <label className="border p-2 flex gap-2 rounded-md">
                <input type="checkbox" />
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
                    d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>

                <span>TV</span>
              </label>
              <label className="border p-2 flex gap-2 rounded-md">
                <input type="checkbox" />
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
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>

                <span>Pets</span>
              </label>
              <label className="border p-2 flex gap-2 rounded-md ">
                <input type="checkbox" />
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
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>

                <span>Private Entrance</span>
              </label>
            </div>

            {preInput(
              "Extra Info",
              "About this place rules and regulations and others.."
            )}
            <textarea />

            {preInput(
              "Check-in & Check-out times, max-guests",
              "Set your check-in and checkout time as well as the maximum number of guests allowed per booking."
            )}

            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input type="text" placeholder="04:15" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input type="text" placeholder="10:15" />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                <input type="text" placeholder="9" />
              </div>
            </div>
            <button className="primary">Add place</button>
          </form>
        </div>
      )}
    </div>
  )
}
