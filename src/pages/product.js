import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/reducer/counterSlice";
import { Button, ButtonGroup } from "@material-tailwind/react";
import { productDataId } from "../services/products";
import { useParams } from "react-router-dom";
import { setProductsDetails } from "../store/reducer/productSlice";

function Product() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const { productsDetails } = useSelector((state) => state.product);

  useEffect(() => {
    productDataId(id).then((res) => {
      console.log("res.data", res.data);
      dispatch(setProductsDetails({ productList: res.data }));
    });
  }, []);

  return (
    <div>
      <div className="flex flex-wrap">
        <img
          className=" max-h-80 max-w-64 rounded-lg shadow-xl shadow-blue-gray-900/50 "
          src={productsDetails.img}
          alt="nature image"
        />{" "}
        <ul className="p-5 ml">
          <li className=" text-2xl"> {productsDetails.title}</li>
          <li className=" text-xl"> {productsDetails.desc}</li>
          <li className=" text-xl">{productsDetails.size}</li>
          <li className=" text-xl"> prize:{productsDetails.price}</li>
        </ul>
      </div>
      <div className="p-2 m-2 "></div>
    </div>
  );
}

export default Product;
