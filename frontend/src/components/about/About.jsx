import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import Founder from "../../assets/founder.png";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>The Burger House</h4>
          <p>
            We are The Burger House. The place for the best burgers in the
            country.
          </p>

          <p>
            Exploer the various types of fast foods and burgers. Click below to
            see the menu.
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={Founder} alt="Founder" />
              <h3>Sabin Shreshtha</h3>
            </div>

            <p>
              I am Sabin Shreshtha, the founder of The Burger House. Affiliated
              to the God taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
