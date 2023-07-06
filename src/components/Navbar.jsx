import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";
import { links } from "../utils/helpers";
import CartIcon from "./CartIcon";
import { useProductsContext } from "../context/productsContext";
import { useUserContext } from "../context/userContext";
import { formatPrice } from "../utils/price";
import { useCartContext } from "../context/cartContext";
import styled from "styled-components";
import "../assets/sass/pages/Home.scss";
import "../assets/sass/components/Navbar.scss";
import "../assets/sass/components/Categories.scss";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { logedUser, logout, loginWithRedirect } = useUserContext();
  const { cart, removeFromBasket } = useCartContext();

  const { openSidebar, closeSidebar } = useProductsContext();

  function setFixed() {
    if (window.scrollY >= 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  const navigate = useNavigate();

  const goProducts = () => {
    navigate("/products");
  };

  const goCart = () => {
    navigate("/cart");
  };

  const goAbout = () => {
    navigate("/about");
  };
  const goContact = () => {
    navigate("/contact");
  };

  function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  window.addEventListener("scroll", setFixed);
  return (
    <header>
      <nav className={sticky ? "nav-container fixed" : "nav-container"}>
        <div className="nav-container__center">
          <div className="nav-container__center__header">
            <Link to="/">
              <h2 className="logo">
                E-<span>Shop</span>
              </h2>
            </Link>
            <button
              onClick={openSidebar}
              type="button"
              className="nav-container__center__header__button"
            >
              <FaBars />
            </button>
          </div>
          <ul className="nav-container__center__links">
            {links.map((link) => {
              const { id, name, url } = link;
              return (
                <li className="nav-container__center__links__link" key={id}>
                  <Link to={url}>{name}</Link>
                </li>
              );
            })}
            {logedUser && (
              <li className="nav-container__center__links__link">
                <Link to="/checkout">Checkout</Link>
              </li>
            )}
          </ul>
          {/* <div className="cart-icon">CartIcon</div> */}
          <CartIcon />
        </div>
      </nav>
      <div className="menu">
        <table>
          <tbody>
            <tr>
              <td>
                <h2>
                  <Link className="logo" style={{ color: "white" }} to="/">
                    E-Shop
                  </Link>
                </h2>
              </td>
              <td className="search-header">
                <input
                  type="text"
                  className="search"
                  name="search"
                  placeholder="Search"
                />
                <button className="search-header-btn" type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </td>
              <td>
                <span>
                  <div className="navbarr">
                    <div className="dropdownn">
                      <button className="dropbtn custom-btn">
                        Account
                        <i className="fa fa-caret-down"></i>
                      </button>
                      <div className="dropdown-content">
                        <Link to="/profile">Profile</Link>
                        <Link to="/">Orders</Link>
                        <Link to="/">Wishlist</Link>
                        {logedUser ? (
                          <Link to="#" onClick={logout}>
                            Logout
                          </Link>
                        ) : (
                          <Link to="#" onClick={loginWithRedirect}>
                            Login
                          </Link>
                        )}
                      </div>
                    </div>
                    <div className="dropdownn">
                      <button className="dropbtn custom-btn cart">
                        <i className="fa fa-shopping-cart"></i>{" "}
                        <span className="value">{cart.length}</span>
                      </button>
                      <div className="dropdown-content cart-content">
                        {cart.length > 0 ? (
                          <a>
                            {cart.slice(0, 4).map((product) => {
                              return (
                                <ul>
                                  <li>
                                    <img src={product.image} alt="Item" />
                                  </li>
                                  <li>
                                    <span
                                      style={{ textTransform: "capitalize" }}
                                      className="title"
                                    >
                                      {product.name}
                                    </span>
                                    <span className="sub-title">
                                      <i className="fa fa-rupee"></i>
                                      {formatPrice(product.price)}
                                    </span>
                                  </li>
                                  <li>
                                    <i
                                      className="fa fa-trash"
                                      onClick={() =>
                                        removeFromBasket(product.id)
                                      }
                                    ></i>
                                  </li>
                                </ul>
                              );
                            })}
                            <Link
                              style={{ textAlign: "center" }}
                              to="/checkout"
                              className="btn"
                            >
                              CheckOut
                            </Link>
                          </a>
                        ) : (
                          <Empty>
                            <p>Your cart is an empty</p>
                            <Link to="/products" className="btn">
                              Fill it
                            </Link>
                          </Empty>
                        )}
                      </div>
                    </div>
                  </div>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="topnav" id="nav">
          <h4 className="discover">Discover</h4>
          <div>
            <div className="dropdownn">
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

            <div className="dropdownn">
              <button onClick={goProducts} className="dropbtn">
                Shop
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content mega-dropdown">
                <div className="roww">
                  <div className="column">
                    <h3>Clothing</h3>
                    <Link to="/products">Men Jeans</Link>
                    <Link to="/products">Women Jeggings</Link>
                    <Link to="/products">Trousers</Link>
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

            <div className="dropdownn">
              <button onClick={goContact} className="dropbtn">
                Contact
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content mega-dropdown">
                <div className="roww">
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

            <div className="dropdownn">
              <button onClick={goAbout} className="dropbtn">
                About Us
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content mega-dropdown">
                <div className="roww">
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

            <div className="dropdownn">
              <button onClick={goCart} className="dropbtn">
                Cart
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content mega-dropdown">
                <div className="roww">
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

            <div className="dropdownn">
              <button className="dropbtn">
                Electronics
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content mega-dropdown">
                <div className="roww column1">
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
          </div>
          {/* <Link className="coupons" href="#about">
            Coupons
          </Link> */}

          <div className="dropdownn responsive">
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

          <div className="dropdownn responsive">
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
            onClick={myFunction}
          >
            &#9776;
          </Link>
        </div>
      </div>
      {/* </nav> */}
    </header>
  );
};

const Empty = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Navbar;
