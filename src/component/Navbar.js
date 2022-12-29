import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-x-4 mt-3 ">
      <Link to="/" className="hover:underline hover:text-emerald-500">
        Characters
      </Link>
      <Link to="/episode" className="hover:underline hover:text-emerald-500">
        Episodes
      </Link>
      <Link to="/location" className="hover:underline hover:text-emerald-500">
        Locations
      </Link>
    </nav>
  );
};

export default Navbar;
