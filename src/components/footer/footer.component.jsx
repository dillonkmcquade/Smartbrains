import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <span>
        © 2020 Foofifai |{" "}
        <a
          className="link-container"
          href="https://www.github.com/dillonkmcquade"
        >
          Site by Dillon McQuade
        </a>
      </span>
    </div>
  );
};

export default Footer;
