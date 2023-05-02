import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <div className=" bg-slate-700 text-white shadow-lg ">
          <div className="navbar md:max-w-[1200px] mx-auto lg:px-24">
        <div className="navbar-start py-3">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52 font-bold">
            <li><Link to="/">Home</Link></li>
          <li>  <Link to="/">Blog</Link></li>
         <li>  <Link to="/">Login</Link></li>
            </ul>
          </div>
          <h1 className="btn btn-ghost normal-case text-xl md:text-3xl font-bold font-serif">Sapori Italiani</h1>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
          <li><Link to="/">Home</Link></li>
          <li>  <Link to="/">Blog</Link></li>
         <li>  <Link to="/">Login</Link></li>
          </ul>
        </div>
      </div>
      </div>
    );
};

export default Navbar;
