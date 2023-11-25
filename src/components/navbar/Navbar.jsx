import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const item = [
    { id: "it1", title: "pilihan beasiswa", link: "/" },
    { id: "it2", title: "daftar", link: "/register" },
    // { id: "it3", title: "hasil", link: "/result"},
  ];
  return (
    <nav className="flex items-center justify-between capitalize bg-blue-500 font-700 px-5 text-white shadow-md shadow-[0, 0, 0.26] py-5">
      <h1 className="text-2xl font-800">Scholarship.</h1>
      <div className="flex items-center gap-10">
        {item.map((item) => (
          <Link to={item.link} key={item.id}>
            {" "}
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
