import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div className="divide-y-2 divide-yellow-500 ">
      <h1 className="font-semibold text-yellow-500 text-4xl uppercase">
        {title}
      </h1>
      <div className="mt-4"></div>
    </div>
  );
};

export default PageTitle;
