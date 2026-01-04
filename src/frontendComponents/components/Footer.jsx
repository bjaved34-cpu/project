import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0f1b2b] text-gray-300 py-12 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">ShopSwift</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Your one-stop shop for all your fashion, electronics, and home
              decor needs. Quality products, fast delivery, and the best
              shopping experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <NavLink to="/">
                <li>
                  <a className="hover:text-white cursor-pointer">Home</a>
                </li>
              </NavLink>
              <NavLink to="/Product">
                <li>
                  <a className="hover:text-white cursor-pointer">Products</a>
                </li>
              </NavLink>
              <NavLink to="/Category">
                <li>
                  <a className="hover:text-white cursor-pointer">Categories</a>
                </li>
              </NavLink>
              <NavLink to="/Cart">
                <li>
                  <a className="hover:text-white cursor-pointer">Cart</a>
                </li>
              </NavLink>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-white cursor-pointer">Electronics</a>
              </li>
              <li>
                <a className="hover:text-white cursor-pointer">Fashion</a>
              </li>
              <li>
                <a className="hover:text-white cursor-pointer">Jewelry</a>
              </li>
              <li>
                <a className="hover:text-white cursor-pointer">Home Decor</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>

            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <p>1234 Street Name, City, State, 12345</p>
              </li>

              <li className="flex items-center gap-3">
                <span>📧</span>
                <p>hello@example.com</p>
              </li>

              <li className="flex items-center gap-3">
                <span>📞</span>
                <p>+1 234 567 890</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ShopSwift — All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
