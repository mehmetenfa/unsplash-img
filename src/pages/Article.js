import { AiOutlinePlus, AiOutlineArrowDown } from "react-icons/ai";

export default function Article({ id, urls, links, user, likes }) {
  return (
    <>
      <div className="p-3 rounded-3xl shadow-md bg-white">
        <article key={id} className="rounded-3xl">
          <img
            src={urls.regular}
            alt={user.username}
            className="h-52 object-fit object-cover w-full lg:h-80 rounded-3xl"
          />

          <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-center justify-start gap-3">
              <button className="border border-slate-400 p-2 text-2xl rounded-full cursor-pointer">
                <AiOutlinePlus />
              </button>
              <a
                href={`${links?.download}?dl=`}
                download
                target='_blank'
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
    </>
  );
}
