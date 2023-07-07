import React from "react";

function Order() {
  return (
    <div className=" grid grid-cols-4 gap-4 shadow-lg">
      <div>
        <img
          className="h-80 w-80"
          src="https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg"
          alt="nature image"
        />
      </div>
      <div className=" text-center text-lg m-28 ">
        <p>Apple iPhone</p>
        <p>8GB Ram 64gb Storage</p>
      </div>
      <div className=" text-center text-lg m-28">
        <p>50,0000 rs</p>
        <p>paid</p>
      </div>
      <div className=" text-center text-lg m-28">
        <p>status:pending</p>
      </div>
    </div>
  );
}

export default Order;
