import React from "react";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-gray-700 h-screen">hello</div>
      <div className="col-span-9 bg-gray-600 h-screen">{children}</div>
    </div>
  );
};

export default layout;
