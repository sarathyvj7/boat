import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header
      className=""
      style={{
        position: "sticky",
        top: "0",
        zIndex: 1,
        backgroundColor: "white",
      }}
    >
      <div className="head">
        <p className="offer">hello</p>
      </div>

      <section className="flex-bar">
        <div className="title">
          <Link to={"/"}>
            {" "}
            <img
              src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
              alt=""
            />
          </Link>
        </div>

        <div className="nav">
          <nav className="flex-container">
            <a className="link" href="/Categories">
              Categories
            </a>
            <a className="link" href="/boatpersonlistation">
              boatpersonlistation
            </a>
            <a className="link" href="  / Corporate Oders">
              Corporate Oders
            </a>
            <a className="link" href="/more">
              More
            </a>
            <input placeholder="search earphones" type="text" />
            <img
              className="image2"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Profile-1.png?v=1663762989"
              alt=""
            />
            <img src="" alt="" />
          </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
