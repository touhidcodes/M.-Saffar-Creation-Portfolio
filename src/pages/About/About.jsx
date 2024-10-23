import React from "react";
import PageTitle from "../../components/PageTitle/PageTitle";

const About = () => {
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
        </div>
      </div>
    </div>
  );
};

export default About;
