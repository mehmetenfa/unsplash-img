import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { AiFillDelete, AiOutlineArrowDown } from "react-icons/ai";
// import { Link } from "react-router-dom"

export default function GetImages({
  id,
  urls,
  links,
  user,
  likes,
  handleClick,
}) {
  const newListElement = { id, urls, links, user, likes };
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=MymZhv89rGBK1SCzB4F7O02ZkZW3Muzj_IsI4gmyplc`
      );
      const data = await response.json();
      console.log(data);
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 2xl:px-0">
        <h1 className="text-slate-800 font-bold text-4xl my-10">My List</h1>

        <section className="grid xl:grid-cols-4 pb-0 gap-3 lg:container">
          <div className="p-3 rounded-3xl shadow-md bg-white">
            <article key={id} className="rounded-3xl">
              <img className="h-52 object-fit object-cover w-full lg:h-80 rounded-3xl" />

              <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="flex items-center justify-start gap-3">
                  <button
                    onClick={() => handleClick(newListElement)}
                    className="border border-slate-400 p-2 text-2xl rounded-full cursor-pointer"
                  >
                    <AiFillDelete />
                  </button>
                  <a
                    href={`${links?.download}?dl=`}
                    download
                    target="_blank"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="border border-slate-400 p-2 text-2xl rounded-full cursor-pointer"
                  >
                    <AiOutlineArrowDown />
                  </a>
                  <small className="text-slate-800 opacity-75 block ml-4">
                    {likes} Likes
                  </small>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
