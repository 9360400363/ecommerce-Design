import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/reducer/counterSlice";
import { Button, ButtonGroup } from "@material-tailwind/react";

function Product() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <div className="flex flex-wrap">
        <img
          className=" max-h-80 max-w-64 rounded-lg shadow-xl shadow-blue-gray-900/50 "
          src="https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg"
          alt="nature image"
        />{" "}
        <ul className="p-5 ml">
          <li className=" text-2xl"> PRODUCT NAME</li>
          <li className=" text-xl"> OFFER</li>
          <li className=" text-xl">DESCRIPTIONS</li>
          <li className=" text-xl">PRIZE</li>
        </ul>
      </div>
      <div className="p-2 m-2 ">
        <ButtonGroup size="sm">
          <Button onClick={() => dispatch(increment())}>+</Button>
          <p className="p-2">{count}</p>

          <Button onClick={() => dispatch(decrement())}>-</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Product;
