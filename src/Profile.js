import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function Profile() {
  const [person, setPerson] = useState([])
  const { username } = useParams()

  useEffect(() => {
    const fetchPerson = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=MymZhv89rGBK1SCzB4F7O02ZkZW3Muzj_IsI4gmyplc`
      )
      const data = await response.json()
      setPerson(data)
    }

    fetchPerson()
  }, [username])

  return (
    <>
      <section className="showcase">
        <div className="overlay relative">
          {person.photos[0].urls.raw && (
            <img
              src={person.photos[0].urls.raw}
              alt={person.name}
              className="profile-image object-fit object-cover w-full"
            />
          )}
          <h1 className="absolute bottom-5 left-5 uppercase text-white font-bold tracking-wide text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {person.name}
          </h1>
        </div>

        <Link
          to="/"
          className="bg-black py-2 px-6 rounded shadow text-white tracking-wide inline-block mt-5"
        >
          &larr; Back
        </Link>
      </section>
    </>
  )
}
