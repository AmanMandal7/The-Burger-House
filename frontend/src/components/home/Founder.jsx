import React from "react";
import { motion } from "framer-motion";
import founder from "../../assets/founder.png";

const Founder = () => {
  const options = {
    initial: { x: "-30%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={founder} alt="Founder" height={200} width={200} />
        <h3>Sabin Shreshtha</h3>
        <p>
          Hey, Everyone I am Sabin Shreshtha, founder of The Burger House.
          <br />
          Our aim is to serve the best buger at the cheapest price in all over
          Nepal. Branches in your own city opening soon.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
