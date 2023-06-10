import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex sm:justify-center space-x-4">
        {[
          ["signup", "/signup"],
          ["login", "/"],
          ["counter", "/counter"],
          ["home", "/home"],
        ].map(([title, url]) => (
          <Link
            to={url}
            className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
          >
            {title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
