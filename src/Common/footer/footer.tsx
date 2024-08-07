import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="fot-container">
        <div className="footer-text">
          <div>
            <img
              className="foot-image"
              src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg"
              alt=""
            />
            <br />
            <br />
            <h5>Subcribe to our email adress</h5>
            <h5>alerts!</h5>
            <input placeholder="enter your email adress" type=" email adress" />
          </div>
          <div>
            <h5>Shop</h5>
            <p>True Wireless Earbuds Wireless Headphones</p>

            <p>Wride Headphones Wireless Speakers</p>
            <p>Home Audio Mobile Accessories</p>
            <p>Smart Watches TReple</p>
            <p>Misfit Trimmers Refer & Earn</p>
          </div>
          <div>
            <h5>Help</h5>
            <p>Track Your order</p>
            <p>Warrenty and Support</p>
            <p>Return Policy </p>
            <p>Service Centers</p>
            <p>Bulk Orders</p>
            <p>FAQs</p>
            <p>Why Buy Driect</p>
          </div>
          <div>
            <h5>Company</h5>
            <p>About boAt</p>
            <p>News</p>
            <p>Read Our Blog</p>
            <p>Careers</p>
            <p>Security</p>
            <p>Investor Relation</p>
            <p>Social Responsibility</p>
            <p>Warrenty Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
