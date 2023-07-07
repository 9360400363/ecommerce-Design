import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productDataId } from "../services/products";

import { setProductsDetails } from "../store/reducer/productSlice";
import { Button } from "@material-tailwind/react";
import { CartById, createCartdata, updateCartById } from "../services/cart";
import { useParams } from "react-router-dom";

import Counting from "../components/Counting";
import { setItems } from "../store/reducer/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Product() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const {cartId}=useSelector((state)=>state.cart)
  const {cartDetails}=useSelector((state)=>state.cart)
  const { id } = useParams();

  const { productsDetails } = useSelector((state) => state.product);
  const { userDetails } = useSelector((state) => state.auth);

  useEffect(() => {
    productDataId(id).then((res) => {
      dispatch(setProductsDetails({ productList: res.data }));
    
    if (cartId) {
      CartById(cartId).then((res) => {
        console.log("response",res)
        let data = res.data.products.find((val) => val.productId == id);
        if (data && data.quantity) {
          setQuantity(data.quantity);
        }
        dispatch(setItems({ data: res.data }));
      });
    }
    });
  }, []);

  const handleClick = (action) => {
    setQuantity(
      action === "inc" ? quantity + 1 : quantity > 1 ? quantity - 1 : 1
    );
  };

  const addProduct = () => {
    if (cartId) {
      const { products } = cartDetails;
      let updatedProducts = [];
      //product detail data from cart
      const data = products.find((val) => val.productId == id);

      if (data && data.productId) {
        updatedProducts = products.map((val) => {
          if (val.productId == id) {
            return { ...val, quantity: quantity };
          }
          return val;
        });
      } else {
        updatedProducts = [
          ...products,
          {
            productId: productsDetails._id,
            quantity: quantity,
          },
        ];
      }
      
      const payload = {
        userid: userDetails.id,
        products: updatedProducts,
      };
      updateCartById(cartId, payload).then((res) => {
        dispatch(setItems({ data: res.data }));
        toast.success("Cart Updated!");
        navigate(`/cart`);
      });
    } else { 
      
      let payload = {
      userid: userDetails.id,
      products: [
        {
          productId: productsDetails._id,
          quantity: quantity,
        },
      ],
    };
    createCartdata(payload).then((res) => {
      console.log("res", res);
      dispatch(setItems({ data: res.data }));
      toast.success("updated");
      navigate("/cart");
    });
     
    }
    
  };

  const { title, desc, size, price, img } = productsDetails;
  return (
    <div>
      <div className="flex flex-wrap">
        <img
          className=" max-h-80 max-w-64 rounded-lg shadow-xl shadow-blue-gray-900/50 "
          src={img}
          alt="nature image"
        />{" "}
        <ul className="p-5 ml">
          <li className=" text-2xl"> {title}</li>
          <li className=" text-xl"> {desc}</li>
          <li className=" text-xl">{size}</li>
          <li className=" text-xl"> prize:{price}</li>
        </ul>
      </div>
      <div className="p-2 m-2 ">
        <Counting handleClick={handleClick} quantity={quantity} />
      </div>
      <Button onClick={addProduct}>Add to bag </Button>
    </div>
  );
}

export default Product;
