import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  const options = {
    initial: { x: "-10%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };

  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>The Burger House</motion.h1>
          <motion.p {...options} transition={{ delay: 0.5 }}>
            No better burge than this.
          </motion.p>
        </div>

        <motion.a
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          href="#menu"
        >
          Our menu
        </motion.a>
      </section>

      <Founder />
      <Menu />
    </>
  );
};

export default Home;
