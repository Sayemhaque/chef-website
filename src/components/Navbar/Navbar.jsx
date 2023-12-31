import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ActiveRoute from "../ActiveRoute/ActiveRoute";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
      navigate("/login")
      })
      .catch(error => console.log(error))
  }
  return (
    <div className=" bg-slate-700 sticky top-0 z-50 text-white shadow-lg ">
      <div className="navbar   md:max-w-[1200px] px-5">
        <div className="navbar-start py-3">
          {/* mobile dropdown menu  */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="flex gap-6 flex-col items-start dropdown-content mt-3 pl-4 py-2 shadow bg-slate-700 rounded-box w-52 font-bold">
              <li><Link to="/">Home</Link></li>
              <li>  <ActiveRoute to="/blog">Blog</ActiveRoute></li>
              <li>  <ActiveRoute to="/about">About us</ActiveRoute></li>
              {user ? <div><img src={user?.photoURL} title={user?.displayName} className="w-10 h-10 rounded-full mb-3  cursor-pointer" alt="" />
                <button className="px-3 py-1 bg-amber-400 rounded-md text-gray-950 uppercase" onClick={handleLogOut}>Log out</button>
              </div>
                : <li>  <ActiveRoute to="/login" >Login</ActiveRoute></li>}
            </ul>
          </div>
          <h1 className="btn btn-ghost normal-case text-xl md:text-4xl font-bold font-serif"><Link to="/">Sapori Italiani</Link></h1>
        </div>
        {/* desktop navbar */}
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-6 items-center px-1 font-bold">
            <li><ActiveRoute to={"/"}>Home</ActiveRoute></li>
            <li>  <ActiveRoute to="/blog">Blog</ActiveRoute></li>
            <li>  <ActiveRoute to="/about">About us</ActiveRoute></li>
            {user ? <div className="flex items-center gap-4"><img src={user?.photoURL ? user.photoURL : user?.displayName} title={user?.displayName} className="w-10 h-10 rounded-full cursor-pointer" alt="" />
              <button className="bg-amber-300 px-3 py-1 rounded-md text-gray-950 uppercase" onClick={handleLogOut}>Log out</button>
            </div> : <li>  <ActiveRoute to="/login">Login</ActiveRoute></li>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

