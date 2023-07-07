import React, { useEffect, useState } from "react";
import Cards from "../components/cards";
import { productData } from "../services/products";
import { useSelector, useDispatch } from "react-redux";
import { setproducts } from "../store/reducer/productSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    productData().then((res) => {
      dispatch(setproducts({ products: res.data }));
    });
  }, []);
  const detailPage = (item) => {
    navigate(`/productDetail/${item._id}`);
  };

  return (
    <div className="flex my-12">
      {products.map((products) => {
        return <Cards ProductList={products} detailPage={detailPage} />;
      })}
    </div>
  );
}

export default Home;
