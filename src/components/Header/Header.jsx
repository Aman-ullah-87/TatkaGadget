import React,{useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className={`flex justify-between items-center bg-white h-20 lg:px-32 xl:px-32 px-12 `}>
      <div className="flex gap-2 items-center ">
        <Link to="/">
          <img src="/src/assets/images/shop.png" alt="" className="h-12 w-12" />
        </Link>
        <Link to="/">
          <span className="text-2xl font-bold ">Tatka Gadget</span>
        </Link>
      </div>
      <svg onClick={()=>setOpen(!open)}
    
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 lg:hidden xl:hidden "
        >
          <path
            fillRule="evenodd"
            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>

      <div className={`lg:flex gap-6 items-center  text-lg   ${open ? 'top-20 bg-cyan-300 absolute w-52 transition duration-150 	 p-4':'lg:top-8 lg:right-24 hidden'}  `}>
        
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 fill-cyan-400"
          >
            <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
        </Link>
        <Link to="/about">About Us </Link>
      </div>
    </nav>
  );
};

export default Header;
