import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <div className="bg-custom-bg bg-cover h-screen w-full flex flex-col justify-between items-center pb-5">
        <div className="flex flex-col gap-3 text-black w-full items-center justify-center h-screen">
          {["Welcome to Vibechat", "Engage, Explore, and Connect", "Anonymously"].map((data, index) => {
            return (
              <h1 className={index === 0 ? "text-3xl text-violet-600" : "text-7xl text-white"} key={index}>
                {data}
              </h1>
            );
          })}
        </div>
        <Link className="p-3 rounded-full backdrop-blur-3xl text-white bg-opacity-70 bg-transparent" to="/Main/AboutUser">
          Let's chat
        </Link>
      </div>
    </>
  );
}

export default Main;