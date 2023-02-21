import React from "react";
import { AiFillInstagram, AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>The Burger House</h2>

        <p>We are trying to give you the best burger in the town.</p>
        <br />

        <em>We give attention to genuine feedback.</em>
        <br />
        <br />
        <strong>© All rights reserved @theburgerhouse</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="http://www.facebook.com">
          <AiFillFacebook />
        </a>
        <a href="http://www.instagram.com">
          <AiFillInstagram />
        </a>
        <a href="http://www.Youtube.com">
          <AiFillYoutube />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
