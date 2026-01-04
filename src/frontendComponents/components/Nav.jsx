import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userSlice";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg"
import { useState } from "react";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //console.log(items)
  

  return (
    <>
      <nav className="w-full bg-white shadow-md px-12 py-4 sticky top-0 z-0">
        <div className="flex justify-between items-center">
          <NavLink to="/Shop-Swift"><img src={logo} /></NavLink>

          <ul className="hidden md:flex space-x-4 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-black hover:text-gray-300 ${
                  isActive ? "font-medium" : ""
                }`
              }
            >
              <li className="hover:text-black">Home</li>
            </NavLink>
            <NavLink
              to="/Product"
              className={({ isActive }) =>
                `text-black hover:text-gray-300 ${
                  isActive ? "font-medium" : ""
                }`
              }
            >
              {" "}
              <li className="hover:font-medium">Products</li>
            </NavLink>
            <NavLink
              to="/Category"
              className={({ isActive }) =>
                `text-black hover:text-gray-300 ${
                  isActive ? "font-medium" : ""
                }`
              }
            >
              {" "}
              <li className="hover:font-medium">Categories</li>
            </NavLink>
          </ul>
          <div className="md:flex space-x-4 hidden">
            <NavLink to="/Cart"><div className="flex space-x-1">
              <svg
                class="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <p className="text-red-500">{items.length}</p>
            </div>
            </NavLink>
            {user ? (
              <button onClick={() => dispatch(logoutUser())}>Logout</button>
            ) : (
              <button>Login</button>
            )}
          </div>
          <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-3 space-y-3 bg-gray-100 p-4 rounded-lg">
            <NavLink to="/" onClick={() => setOpen(false)} className="block">
              Home
            </NavLink>

            <NavLink
              to="/Product"
              onClick={() => setOpen(false)}
              className="block"
            >
              Product
            </NavLink>

            <NavLink
              to="/Category"
              onClick={() => setOpen(false)}
              className="block"
            >
              Category
            </NavLink>
            
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
