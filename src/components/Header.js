import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "../store/reducer/authSlice";

const Header = () => {
  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleclick = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header>
      <nav className="grid grid-cols-3 gap-2 sm:justify-center  p-2 my-2 ">
        {!token ? (
          <div className=" justify-between ">
            {[
              ["signup", "/signup"],
              ["login", ""],
            ].map(([title, url]) => (
              <Link
                to={url}
                key={123}
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
              >
                {title}
              </Link>
            ))}
          </div>
        ) : (
          <div className=" justify-between ">
            {[
              ["counter", "counter"],
              ["home", ""],
              ["cart", "cart"],
              ["order", "order"],
            ].map(([title, url]) => (
              <Link
                to={url}
                className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
              >
                {title}
              </Link>
            ))}
            <button onClick={handleclick}> logout</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
