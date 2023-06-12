import { Link } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";

const Header = () => {
  return (
    <header>
      <nav className="grid grid-cols-3 gap-2 sm:justify-center  p-2 my-2 ">
        <div>
          <img
            className="h-20 w-20 "
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/ecommerce-website-examples.jpg"
            alt="nature image"
          />
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <div className="w-[32rem]">
            <Input type="text" label="search" />
          </div>{" "}
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
        <div className=" justify-between ">
          {[
            ["signup", "/signup"],
            ["login", "/login"],
            ["counter", "/counter"],
            ["home", "/home"],
            ["cart", "/cart"],
            ["order", "/order"],
          ].map(([title, url]) => (
            <Link
              to={url}
              className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
