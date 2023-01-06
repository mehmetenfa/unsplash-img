import { useState, useEffect } from "react"
import Article from "./Article"
import Navbar from "../components/Navbar"
// import { Link } from "react-router-dom"

export default function GetImages() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=MymZhv89rGBK1SCzB4F7O02ZkZW3Muzj_IsI4gmyplc`
      )
      const data = await response.json()
      console.log(data)
      setImages(data)
    }

    fetchImages()
  }, [])

  return (
    <>
    <Navbar />
      <div className="container mx-auto px-5 2xl:px-0">
        <h1 className="text-slate-800 font-bold text-4xl my-10">
          Recommended For You
        </h1>

        {!images ? (
          <div>
            <h1>Loading...</h1>
          </div>
        ) : (
          <section className="grid xl:grid-cols-4 pb-0 gap-3 lg:container">
            {images.map((image) => (
              <Article key={image.id} {...image} />
            ))}
          </section>
        )}
      </div>
    </>
  )
}
