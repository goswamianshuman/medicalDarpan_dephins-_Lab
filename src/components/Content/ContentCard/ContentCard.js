import React from "react";
import "./ContentCard.css";
function ContentCard() {
  return (
    <div className="main_Container">
      {/* product image */}
      <img src="/Images/tablet.jpg" alt="" />

      <div className="product_detail">
        <p>Favipiravir 400mg (Fabiflu) Tablets</p>
        <p>
          <span className="price">Rs 1,775</span> /{" "}
          <span className="global">stripe</span>
        </p>
      </div>

      <div className="location">
        <p>Glenmark Pharmaceutical Limited</p>
        <p>
          <span className="global">PARVAT PATIYA, SURAT, GUJRAT</span>
        </p>
      </div>

      <div className="contact">
        {/* svg */}
        <img src="/Images/plane.png" alt="" />
        <p>Contact Supplier</p>
      </div>
    </div>
  );
}

export default ContentCard;
