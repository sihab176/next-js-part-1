import Link from "next/link";
import React from "react";
const allData = [
  {
    id: 1,
    name: "Tropical Mango",
    image_url: "https://i.ibb.co/j9hxtbR4/fr-2-removebg-preview.png",
    description: "Juicy ripe mango imported from South Asia",
    price: 2.99,
    weight: "350g",
    origin: "Pakistan",
    stock: 45,
    rating: 4.7,
  },
  {
    id: 2,
    name: "Golden Pineapple",
    image_url: "https://i.ibb.co/4DkTY1T/fr-4-removebg-preview.png",
    description: "Sweet and tangy pineapple with golden flesh",
    price: 3.49,
    weight: "900g",
    origin: "Costa Rica",
    stock: 28,
    rating: 4.5,
  },
  {
    id: 3,
    name: "Red Delight Grapes",
    image_url: "https://i.ibb.co/1GySJ31S/veg-8-removebg-preview.png",
    description: "Seedless red grapes bursting with flavor",
    price: 4.25,
    weight: "500g",
    origin: "Italy",
    stock: 63,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Green Kiwi Pack",
    image_url: "https://i.ibb.co/0xHmFN1/veg-3-removebg-preview.png",
    description: "Vitamin-rich kiwis with perfect sweet-tart balance",
    price: 2.75,
    weight: "300g (3 pieces)",
    origin: "New Zealand",
    stock: 37,
    rating: 4.6,
  },
];
const page = () => {
  return (
    <>
      <div className="text-5xl ">this services page</div>
      <div className="grid grid-cols-3  p-10   gap-20 ">
        {allData.map((data) => (
          <div key={data.id} className="  bg-gray-200 m-2 w-60 rounded-2xl shadow-2xl shadow-fuchsia-500 relative">
            <p className="text-3xl absolute top-2 right-2 text-red-500">X</p>
            <div className=" flex justify-center">
              <img className="w-40 h-40 bg-green-600 p-2 rounded-full mt-3" src={data.image_url} alt="" />
            </div>
            <div className="text-black text-center pb-3">
              <h1>{data.name}</h1>
              <p className="font-bold mt-2">{data.origin}</p>
              <p className="font-bold mt-2 text-orange-400 pb-4">
                ${data.price}
              </p>
              <Link href={`/services/${data.id}`}>
                <button className="bg-pink-400 px-3 py-1 rounded-xl ">
                  view
                </button>
              </Link>
              {/* <p className="truncate">{data.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
