import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/product-detail/123");
  };
  return (
    <div>
      <div>
        <Card className="w-96 p-2 m-2">
          <CardHeader floated={false} shadow={false} className="h-80">
            <img
              src="https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody>
            <div className="flex items-center justify-between mb-2">
              <Typography color="blue-gray" className="font-medium">
                Apple AirPods
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
              onClick={handleOnClick}
            >
              Product details
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
