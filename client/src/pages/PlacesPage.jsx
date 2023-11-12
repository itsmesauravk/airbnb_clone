import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Perks from "../Perks"
import axios from "axios"

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
  async function addPhotoByLink(ev) {
    ev.preventDefault()
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    })
    setAddedPhotos(prev => {
      return [...prev, filename]
      //returning new value with all previous value
    })
    setPhotoLink("")
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
              value={title}
              onChange={ev => {
                setTitle(ev.target.value)
              }}
            />

            {preInput("Address", "Address to this place.")}
            <input
              type="text"
              placeholder="address"
              value={address}
              onChange={ev => {
                setAddress(ev.target.value)
              }}
            />

            {preInput("Photos", "Recently clicked photos of this place.")}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add using a Link..."
                value={photoLink}
                onChange={ev => {
                  setPhotoLink(ev.target.value)
                }}
              />
              <button
                onClick={addPhotoByLink}
                className="bg-primary px-4 rounded-full text-white "
              >
                Add&nbsp;photo
              </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {addedPhotos.length > 0 &&
                addedPhotos.map(link => (
                  <div>
                    {/* <img
                      src={"http://localhost:4000/uploads/" + link}
                      alt="image"
                    /> */}
                    {link}
                  </div>
                ))}
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
            <textarea
              value={description}
              onChange={ev => {
                setDescription(ev.target.value)
              }}
            />

            {preInput("Perks", " Select all the perks of this place.")}

            <div className="grid gap-2 grids-col-2 md:grid-cols-4 lg:grid-cols-6">
              <Perks selected={perks} onChange={setPerks} />
            </div>

            {preInput(
              "Extra Info",
              "About this place rules and regulations and others.."
            )}
            <textarea
              value={extraInfo}
              onChange={ev => {
                SetExtraInfo(ev.target.value)
              }}
            />

            {preInput(
              "Check-in & Check-out times, max-guests",
              "Set your check-in and checkout time as well as the maximum number of guests allowed per booking."
            )}

            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <h3 className="mt-2 -mb-1">Check in time</h3>
                <input
                  type="text"
                  placeholder="04:15"
                  value={checkIn}
                  onChange={ev => {
                    setCheckIn(ev.target.value)
                  }}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Check out time</h3>
                <input
                  type="text"
                  placeholder="10:15"
                  value={checkOut}
                  onChange={ev => {
                    setCheckOut(ev.target.value)
                  }}
                />
              </div>
              <div>
                <h3 className="mt-2 -mb-1">Max number of guests</h3>
                <input
                  type="number"
                  placeholder="9"
                  value={maxGuests}
                  onChange={ev => {
                    setMaxGuests(ev.target.value)
                  }}
                />
              </div>
            </div>
            <button className="primary">Add place</button>
          </form>
        </div>
      )}
    </div>
  )
}
