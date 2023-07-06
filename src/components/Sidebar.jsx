import React, { useState } from "react";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import CartIcon from "./CartIcon";
import { links } from "../utils/helpers";
import "../assets/sass/components/Sidebar.scss";
import { useProductsContext } from "../context/productsContext";
import { useUserContext } from "../context/userContext";
import "../assets/style/header.css";

const Sidebar = () => {
  const { toggleSidebar, openSidebar, closeSidebar } = useProductsContext();
  const { logedUser } = useUserContext();
  const [sticky, setSticky] = useState(false);

  function setFixed() {
    if (window.scrollY >= 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  const open = true;
  return (
    <header>
      <nav classNameName={sticky ? "nav-container fixed" : "nav-container"}>
        <div classNameName="nav-container__center">
          <div classNameName="nav-container__center__header">
            <Link to="/">
              <h2 classNameName="logo">
                E-<span>Shop</span>
              </h2>
            </Link>
            <button
              onClick={openSidebar}
              type="button"
              classNameName="nav-container__center__header__button"
            >
              <FaBars />
            </button>
          </div>
          <ul classNameName="nav-container__center__links">
            {links.map((link) => {
              const { id, name, url } = link;
              return (
                <li classNameName="nav-container__center__links__link" key={id}>
                  <Link to={url}>{name}</Link>
                </li>
              );
            })}
            {logedUser && (
              <li classNameName="nav-container__center__links__link">
                <Link to="/checkout">Checkout</Link>
              </li>
            )}
          </ul>
          <div classNameName="cart-icon">CartIcon</div>
          <CartIcon />
        </div>
        {/* <div className={`${toggleSidebar} ? "none" : "menu"`}>
        <table>
          <tbody>
            <tr>
              <td>
                <h2>E-Shop</h2>
              </td>
              <td>
                <input
                  type="text"
                  className="search"
                  name="search"
                  placeholder="Search"
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </td>
              <td>
                <span>
                  <div className="navbar">
                    <div className="dropdown">
                      <button className="dropbtn">
                        Account
                        <i className="fa fa-caret-down"></i>
                      </button>
                      <div className="dropdown-content">
                        <Link to="/">Profile</Link>
                        <Link to="/">Orders</Link>
                        <Link to="/">Wishlist</Link>
                        <Link to="/">LogIn/LogOut</Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button className="dropbtn cart">
                        <i className="fa fa-shopping-cart"></i>{" "}
                        <span className="value">2</span>
                      </button>
                      <div className="dropdown-content cart-content">
                        <a>
                          <ul>
                            <li>
                              <img
                                src="https://i.ibb.co/RpnQq12/01.webp"
                                alt="Item"
                              />
                            </li>
                            <li>
                              <span className="title">Samsung Galaxy POP</span>
                              <span className="sub-title">
                                <i className="fa fa-rupee"></i>5999
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-trash"></i>
                            </li>
                          </ul>
                          <ul>
                            <li>
                              <img
                                src="https://i.ibb.co/RpnQq12/01.webp"
                                alt="Item"
                              />
                            </li>
                            <li>
                              <span className="title">Samsung Galaxy POP</span>
                              <span className="sub-title">
                                <i className="fa fa-rupee"></i>5999
                              </span>
                            </li>
                            <li>
                              <i className="fa fa-trash"></i>
                            </li>
                          </ul>
                          <button type="submit" className="btn1">
                            CheckOut
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="topnav" id="myTopnav">
          <div className="dropdown">
            <button className="dropbtn">
              Electronics
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content mega-dropdown">
              <div className="row  column1">
                <div className="column">
                  <h3>Mobiles</h3>
                  <Link to="/">Mi</Link>
                  <Link to="/">Samsung</Link>
                  <Link to="/">RealMe</Link>
                </div>
                <div className="column">
                  <h3>Mobile Accessories</h3>
                  <Link to="/">Power Bank</Link>
                  <Link to="/">OTG</Link>
                  <Link to="/">Covers</Link>
                </div>
                <div className="column">
                  <h3>Speakers</h3>
                  <Link to="/">Home Theater</Link>
                  <Link to="/">Portable</Link>
                  <Link to="/">Sound Bars</Link>
                </div>
                <div className="column">
                  <h3>Featured</h3>
                  <Link to="/">Apple Store</Link>
                  <Link to="/">Mcrosoft Store</Link>
                  <Link to="/">Inferno Store</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Men & Women
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content mega-dropdown">
              <div className="row">
                <div className="column">
                  <h3>Clothing</h3>
                  <Link to="/">Men Jeans</Link>
                  <Link to="/">Women Jeggings</Link>
                  <Link to="/">Trousers</Link>
                </div>
                <div className="column">
                  <h3>Grooming</h3>
                  <Link to="/">Perfumes</Link>
                  <Link to="/">Deodrants</Link>
                  <Link to="/">Hair Groom</Link>
                </div>
                <div className="column">
                  <h3>Footware</h3>
                  <Link to="/">Casual</Link>
                  <Link to="/">Boots</Link>
                  <Link to="/">Slippers</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Home & Furniture
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content mega-dropdown">
              <div className="row">
                <div className="column">
                  <h3>Kitchen</h3>
                  <Link to="/">Cook Ware</Link>
                  <Link to="/">Electric Corner</Link>
                  <Link to="/">Infrastructure</Link>
                </div>
                <div className="column">
                  <h3>Home Improvements</h3>
                  <Link to="/">Cleaners</Link>
                  <Link to="/">Perfumes</Link>
                  <Link to="/">Sanitizer</Link>
                </div>
                <div className="column">
                  <h3>Living Room</h3>
                  <Link to="/">Lightning</Link>
                  <Link to="/">Dining Table</Link>
                  <Link to="/">Jugs</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Sport & Fitness
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content mega-dropdown">
              <div className="row">
                <div className="column">
                  <h3>Sport</h3>
                  <Link to="/">Cricket</Link>
                  <Link to="/">Football</Link>
                  <Link to="/">Volley Ball</Link>
                </div>
                <div className="column">
                  <h3>Fitness</h3>
                  <Link to="/">Dumbells</Link>
                  <Link to="/">Mini-Set</Link>
                  <Link to="/">Powders</Link>
                </div>
                <div className="column">
                  <h3>Featured</h3>
                  <Link to="/">Suppliments</Link>
                  <Link to="/">Gadgets</Link>
                  <Link to="/">Kits</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              Kids Store
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content mega-dropdown">
              <div className="row">
                <div className="column">
                  <h3>Toys</h3>
                  <Link to="/">Dolls</Link>
                  <Link to="/">E-Gadgets</Link>
                  <Link to="/">Tabs</Link>
                </div>
                <div className="column">
                  <h3>Books</h3>
                  <Link to="/">Story Books</Link>
                  <Link to="/">Educational</Link>
                  <Link to="/">Guidlines</Link>
                </div>
                <div className="column">
                  <h3>Care</h3>
                  <Link to="/">Body Care</Link>
                  <Link to="/">Hair Care</Link>
                  <Link to="/">Growth</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">
              More
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/">Notifications</Link>
              <Link to="/">Customer Care</Link>
              <Link to="/">Download App</Link>
            </div>
          </div>

          <Link href="#about">Coupons</Link>

          <div className="dropdown responsive">
            <button className="dropbtn">
              Account
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to="/">Profile</Link>
              <Link to="/">Orders</Link>
              <Link to="/">Wishlist</Link>
              <Link to="/">Login</Link>
            </div>
          </div>

          <div className="dropdown responsive">
            <button className="dropbtn">
              <i className="fa fa-shopping-cart"></i>
              <span className="value">2</span>
            </button>
            <div className="dropdown-content">
              <Link>
                <ul>
                  <li>
                    <img src="https://i.ibb.co/RpnQq12/01.webp" alt="Item" />
                  </li>
                  <li>
                    <span className="title">Samsung Galaxy POP</span>
                    <span className="sub-title">
                      <i className="fa fa-rupee"></i>5999
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-trash"></i>
                  </li>
                </ul>
                <ul>
                  <li>
                    <img src="https://i.ibb.co/RpnQq12/01.webp" alt="Item" />
                  </li>
                  <li>
                    <span className="title">Samsung Galaxy POP</span>
                    <span className="sub-title">
                      <i className="fa fa-rupee"></i>5999
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-trash"></i>
                  </li>
                </ul>
                <button type="submit" className="btn1">
                  CheckOut
                </button>
              </Link>
            </div>
          </div>
          <Link
            href="javascript:void(0);"
            style={{ fontSize: "15px" }}
            className="icon"
            onClick={closeSidebar}
          >
            &#9776;
          </Link>
        </div>
      </div> */}
      </nav>
    </header>
  );
};

export default Sidebar;
