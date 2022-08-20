import React from "react";
import styles from "../styles/SocialLinks.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";

const SocialLinks = () => {
  const { text } = useTypewriter({
    words: ["#YOUTUBE", "#TELEGRAM", "#INSTAGRAM"],
    loop: 0,
    typeSpeed: 200,
    deleteSpeed: 150,
    delaySpeed: 2500,
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.static}>JOIN US ON</p>
        <span className={styles.dynamic}>
          {text}
          <Cursor />
        </span>
      </div>
      <div className={styles.links}>
        <div className={styles.item}>
          <Link href="/">
          <div className={styles.youtube}><i className="fa-brands fa-youtube"></i></div>
          </Link>
          <p>YOUTUBE</p>
        </div>
        <div className={styles.item}>
          <Link href="/">
          <div className={styles.instagram}><i className="fa-brands fa-instagram"></i></div>
          </Link>
          <p>INSTAGRAM</p>
        </div>
        <div className={styles.item}>
          <Link href="/">
          <div className={styles.telegram}><i className="fa-brands fa-telegram" ></i></div>
          </Link>
          <p>TELEGRAM</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
