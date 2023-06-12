import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  ButtonGroup,
  Textarea,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/reducer/counterSlice";

export default function Cart() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="  ">
      <div className="grid col-span-2">
        <div className="">
          <Card className="flex-row w-full max-w-[42rem] m-2">
            <CardHeader
              shadow={false}
              floated={false}
              className="w-full h-full object-cover"
            >
              <img
                src="https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg"
                alt="image"
                className="w-fit h-fit rounded-sm"
              />
            </CardHeader>
            <CardBody className=" m-9 ">
              <Typography variant="h6" color="blue" className="uppercase mb-4">
                {" "}
                product name
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {" "}
                product descripitions
              </Typography>
              <ButtonGroup size="sm" className=" m-5 p-2">
                <Button onClick={() => dispatch(increment())}>+</Button>
                <p className="p-2">{count}</p>

                <Button onClick={() => dispatch(decrement())}>-</Button>
              </ButtonGroup>{" "}
              <Typography color="gray" className="font-normal mb-8 text-lg ">
                50,000 ₹
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          {" "}
          <Card className="flex-row w-full max-w-[42rem] m-2">
            <CardHeader
              shadow={false}
              floated={false}
              className="w-full h-full object-cover"
            >
              <img
                src="https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg"
                alt="image"
                className="w-fit h-fit rounded-sm"
              />
            </CardHeader>
            <CardBody className=" m-9 ">
              <Typography variant="h6" color="blue" className="uppercase mb-4">
                {" "}
                product name
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                {" "}
                product descripitions
              </Typography>
              <ButtonGroup size="sm" className=" m-5 p-2">
                <Button onClick={() => dispatch(increment())}>+</Button>
                <p className="p-2">{count}</p>

                <Button onClick={() => dispatch(decrement())}>-</Button>
              </ButtonGroup>{" "}
              <Typography color="gray" className="font-normal mb-8 text-lg ">
                50,000 ₹
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className=" my-14 fixed top-4 right-4 h-[calc(100vh-2rem)] w-full max-w-[40rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="w-96 mb-5 my-5">
          <Textarea label="Address" />
        </div>
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-lg">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 rounded-l-lg">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Qty
                </th>
                <th scope="col" class="px-6 py-3 rounded-r-lg">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                ></th>
                <td class="px-6 py-4">1</td>
                <td class="px-6 py-4">$2999</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">
                  Total
                </th>
                <td class="px-6 py-3">3</td>
                <td class="px-6 py-3">21,000</td>
              </tr>
            </tfoot>
          </table>
          <Button className="m-2" size="md">
            Place Your Oder
          </Button>
          <div className="mb-2 p-4"></div>
        </div>
      </div>
    </div>
  );
}
