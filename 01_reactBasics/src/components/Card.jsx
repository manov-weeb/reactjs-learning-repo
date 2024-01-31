import React from "react";

const Card = ({
  username = "Dave Gray",
  post = "Data Analyst",
  imgSource = "https://plus.unsplash.com/premium_photo-1673458070037-8cc98a465c0b?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) => {
  // console.log(props)
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full"
          src={imgSource}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
              quos eos facere harum maiores tempora.
            </p>
          </blockquote>
          <figcaption>
            <div>{username}</div>
            <div>{post}, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
