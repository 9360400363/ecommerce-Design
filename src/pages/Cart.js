import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  
  Textarea,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { CartById } from "../services/cart";
import { useEffect } from "react";
import { productDataId } from "../services/products";
import { setItems } from "../store/reducer/cartSlice";


export default function Cart() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const { cartId } = useSelector((state) => state.cart);
  const {cartDetails}= useSelector((state)=>state.cart);

  
  useEffect(()=>{
    CartById(cartId).then(async(res)=>{
      const products = await Promise.all(
        res.data.products
        //console.log("products",products);
        .map(async (item) => {
          let { data } = await productDataId(item.productId);
          return { ...data, ...item };
        })
      );res.data.products = products;
      console.log("products", products);
      dispatch(setItems({ data: res.data }));
      
    })
  })

  return (
    <div className="  ">
      <div className="grid col-span-2">
      
        {<div>
          <Card className="flex-row w-full max-w-[42rem] m-2">
         { cartDetails?.products &&
          cartDetails.products.map((product) => (<ul><li> <CardHeader
              shadow={false}
              floated={false}
              className="w-full h-full object-cover"
            >
              <img
                src={""}
                alt="image"
                className="w-fit h-fit rounded-sm"
              />
            </CardHeader>
            
            </li>
           <li><CardBody className=" m-9 ">
              <li><Typography variant="h6" color="blue" className="uppercase mb-4">
               title: {product.title }
              </Typography></li>
             <li> <Typography variant="h4" color="blue-gray" className="mb-2">
             desc:{product.desc}
              </Typography></li>
              <Typography color="gray" className="font-normal mb-8 text-lg ">
              <p>price: {product.price}</p>
              </Typography>
              <Typography color="gray" className="font-normal mb-8 text-lg ">
              <p>quantity: {product.quantity}</p>
              </Typography>
            </CardBody></li> </ul>))}
           
          </Card> Total:{" "}
        {(cartDetails.products || []).reduce((acc, item) => {
          acc = acc + Number(item.price) * Number(item.quantity);
          return acc;
        }, 0)}
          <div className="w-96 mb-5 my-5 ">
          <Textarea label="Address" />

        </div>
        <Button>check out</Button>
        </div>}
      </div>
      
    </div>
  );
}
