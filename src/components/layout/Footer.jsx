import { NavLink } from "react-router-dom"

export const Footer=()=>{
    return(
        <footer className="section-footer">
    <div className="footer-container container">
      <div className="content_1">
        {/* <img src="./images/logo.png" alt="logo" /> */}
        <p>
          Welcome to PlotPalette, <br />
          your ultimate destination for
          <br />
          Movies!
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div className="content_2">
        <h4>SHOPPING</h4>
        <NavLink to="https://www.vedantcomputers.com/">Computer Store</NavLink>
        <NavLink to="https://www.laptopstoreindia.com/">Laptop Store</NavLink>
        <NavLink to="https://salty.co.in/">Accessories</NavLink>
        <NavLink to="https://www.dealsmagnet.com/">Sales & Discount</NavLink>
      </div>
      <div className="content_3">
        <h4>Experience</h4>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="" target="_blank"> Payment Method </NavLink>
        <NavLink to="" target="_blank"> Delivery </NavLink>
        <NavLink to="" target="_blank"> Return and Exchange </NavLink>
      </div>
      <div className="content_4">
        <h4>NEWSLETTER</h4>
        <p>
          Be the first to know about new
          <br />
          arrivals, sales & promos!
        </p>
        <div className="f-mail">
          {/* <label htmlFor="footer-mail"></label> */}
          <input type="email" name="footer-mail" placeholder="Your Email" />
          <i className="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    <div className="f-design">
      <div className="f-design-txt">
        <p>Design and Code by Prem Prakash Soni</p>
      </div>
    </div>
  </footer>
    );
}