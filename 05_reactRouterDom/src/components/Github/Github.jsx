import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/manov-weeb")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers} <br/>
      Username: {data.login}
      <img className="flex justify-center align-center" src={data.avatar_url} width={300} alt="" />
    </div>
  );
};

export default Github;

export const gitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/manov-weeb");
  return response.json();
};
