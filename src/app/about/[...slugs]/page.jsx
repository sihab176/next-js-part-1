import React from "react";

const page = async ({ params }) => {
  const p = await params;
  console.log(p);
  return <div></div>;
};

export default page;
