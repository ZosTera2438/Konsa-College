import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// const prefix = " " || process.env.NEXT_PUBLIC_BASIC_PATH;

const Navbar = () => {
  const [open,setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <Image
            className={styles.KonsaCollege}
            src={"/KonsaCollege.png"}
            alt=""
            height="60px"
            width="150px"
          />
        </Link>
        <div className={styles.menu}>
          <motion.button
            className={styles.joinButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/"
          >
            Join now
          </motion.button>

          <span className={styles.options}>
            <Link href="/">Home</Link>
          </span>
          <span className={styles.options}>
            <Link href="/about">About Us</Link>
          </span>
        </div>
        <div className={styles.toggleBar} onClick={toggle} style={{display:open ? "none":""}}>
          <i
            className="fas fa-bars"
            style={{ color: "light-grey", fontSize: "2.5rem" }}
          />
        </div>
        <div className={styles.toggleCross} onClick={toggle} style={{display:open ? "":"none"}}>
          <i
            className="fa fa-times"
            style={{ color: "light-grey", fontSize: "2.5rem" }}
          />
        </div>
      </div>
      <div className={styles.toggleMenu} style={{right:open ? "0":"-250px"}} >
        <div className={styles.toggleOptions}>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.toggleOptions}>
          <Link href="/explore">Explore</Link>
        </div>
        <button className={styles.toggleOptions}>
         <Link href="/">Join Now</Link>
        </button>
        <div className={styles.toggleOptions}>
          <Link href="/about">About</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
