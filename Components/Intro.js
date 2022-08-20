import React from "react";
import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

// const prefix = "" || process.env.NEXT_PUBLIC_PATH_URL;

const Intro = () => {
  const { text } = useTypewriter({
    words: [
      "College Preference ?",
      "Councelling Process ?",
      "Branch Preference ?",
      "Document Issues ?",
    ],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 90,
    delaySpeed: 2500,
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.static}>DOUBTS RELATED TO</div>
          <span className={styles.dynamic}>
            {text}
            <Cursor />
          </span>
          <div className={styles.tagline}>
            We support & help students during college councelling process.
          </div>
          <Link href="/explore">
            <motion.button
              className={styles.exploreButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              EXPLORE <i className="fa fa-angle-double-right fa-lg" />
            </motion.button>
          </Link>
        </div>
        <div className={styles.introGif}>
          <Image
            src={"/introGif.gif"}
            alt=""
            height={"500"}
            width={"570"}
          />
        </div>
      </div>
      <div className={styles.slogan}>
        <span>
          INDIA&#39;S MOST LOVED COLLEGE COUNCELLING CHANNEL
          <span className={styles.heart} />
        </span>
      </div>
    </>
  );
};

export default Intro;
