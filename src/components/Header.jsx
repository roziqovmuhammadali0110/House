import { Link } from "react-router-dom";
import logo from "../assets/apartments/logo.svg";
const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="" />{" "}
        </Link>
        <div className="flex items-center gap-6 ">
          <Link to="" className="hover:text-violet-900 transition">
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition "
            to="">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
