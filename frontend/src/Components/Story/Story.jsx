import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import {useNavigate} from 'react-router-dom'
import "./story.css";

function Story(props) {
  const { name, overview, date, title, comments, likes } = props.story;

  const [like, setLike] = useState(false);

  const handleLike = () => {
    console.log(like);
    setLike((prevState) => !prevState);
  };

  const navigate = useNavigate();

  const goToIndividualPost = () => {
    navigate("/indi");
  };

  return (
    <div className="w-full max-w-md shadow-2xl rounded-md flex flex-col p-6">
      <section className="flex flex-col gap-5">
        <section className="flex gap-4 items-center justify-start">
          <Avatar
            src="https://www.shutterstock.com/image-photo/san-diego-california-july-22-600nw-1300933561.jpg"
            className=" bg-cover bg-center"
          />
          <div className="flex flex-col justify-center items-start roboto-bold">
            <h1 className="text-xl">Aditi Sharma</h1>
          </div>
        </section>
        <p className="roboto-regular">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nulla culpa maxime animi corporis, eligendi in aut esse corrupti odit.
        </p>
        <section className="text-md text-slate-400">
          12:45 AM 19 June 2024
        </section>
        <section className="w-full justify-start flex items-center gap-3 border-y-2 border-slate-200 py-2">
          <p>
            <strong className="mr-0.5">478</strong>
            <span className="roboto-light text-slate-500">Likes</span>
          </p>
          <p>
            <strong className="mr-0.5">45</strong>
            <span className="roboto-light text-slate-500">Comments</span>
          </p>
        </section>
        <section className="w-full flex items-center justify-between">
          {like ? (
            <FaHeart
              className="text-2xl cursor-pointer overflow-hidden"
              style={{ color: "red" }}
              onClick={handleLike}
            />
          ) : (
            <CiHeart
              className="text-2xl cursor-pointer overflow-hidden"
              onClick={handleLike}
            />
          )}
          <FaRegComment className="text-3xl cursor-pointer" onClick={goToIndividualPost} />
          <CiShare1 className="text-3xl cursor-pointer" />
        </section>
      </section>
    </div>
  );
}

export default Story;
