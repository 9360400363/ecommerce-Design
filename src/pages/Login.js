import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { login } from "../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector, useDispatch } from "react-redux";
import { setToken, setUserDetails } from "../store/reducer/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const notify = () => toast("login succesfully");

  const dispatch = useDispatch();

  const [logindata, setLogindata] = useState({});

  const handleChange = ({ target: { value, name } }) => {
    setLogindata({ ...logindata, [name]: value });
  };

  const handleClick = () => {
    login(logindata)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          dispatch(setToken({ token: res.data.accesstoken }));
          const { username, email, isAdmin, _id } = res.data.user;
          dispatch(
            setUserDetails({
              userDetails: { username, email, isAdmin, id: _id },
            })
          );
          notify();
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("something went wrong!");
      });
  };

  return (
    <div>
      <div className=" flex justify-center my-10">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Login
          </Typography>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input
                size="lg"
                label="username"
                name="username"
                onChange={handleChange}
              />
              <Input
                type="password"
                size="lg"
                label="Password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <Button className="mt-6" fullWidth onClick={handleClick}>
              Login
            </Button>

            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't You have an account ?{" "}
              <Link to={"signup"}>
                <a
                  href="#"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                >
                  Signup
                </a>
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
