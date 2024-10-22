import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";

const Home = () => {
  return (
    <div className="pt-10 ">
      <div className="grid grid-cols-7 max-w-screen-xl mx-auto">
        <div className="col-span-2 bg-yellow-500 rounded-md p-10">
          <div className="border-2 rounded-md">
            <img
              src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-56 h-56 rounded-full m-auto mt-6"
            />
            <h1 className="uppercase text-center mt-10 text-2xl font-bold ">
              M. saffar Creations
            </h1>
            <div className="text-xl font-semibold my-5 text-right mr-12">
              <h4>Graphic Designer &</h4>
              <h4>Calligrapher</h4>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-4xl uppercase  font-semibold">About</h1>
            <p className="m-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis nemo voluptatum, vel, est mollitia accusantium vero
              nisi corporis quo, ipsam numquam veritatis at nulla dolore modi
              optio molestias. Aspernatur dolor eius rem magnam eum distinctio
              numquam quaerat aperiam animi maxime!
            </p>
          </div>
        </div>
        <div className="col-span-5 my-10 mr-10 text-center">
          <PageTitle title="Portfolio" />
          <a href="https://git.io/typing-svg">
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&random=false&width=435&lines=M.+Saffar+Creation"
              alt="Typing SVG"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
