import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
// import Link from "next/link";

// const prefix = " " || process.env.NEXT_PUBLIC_BASIC_PATH;

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Image
            className={styles.KonsaCollege}
            src={"/KonsaCollege.png"}
            alt=""
            height="60px"
            width="150px"
          />
          <br />
          <br />
          <p className={styles.tagline}>
            We are India&#39;s Most Loved College Councelling Channel. Connect With
            Us!
          </p>
        </div>
        {/* <div className={styles.linkConntainer}> */}
        <div className={styles.box}>
          <strong className={styles.heading}>
            GET IN TOUCH
            <br />
            <br />
          </strong>
          <div className={styles.list}>
            <i
              className="fa fa-envelope"
              style={{ fontSize: "1.1rem", marginRight: "5px" }}
            />
            vaibhav2438@gmail.com
          </div>
        </div>
        <div className={styles.box}>
          <strong className={styles.heading}>
            HELPFUL LINKS
            <br />
            <br />
          </strong>
          <ul>
            <li className={styles.list}>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "blue", marginRight: "10px" }}
              />
              <span>Privacy Policy</span>
            </li>
            <li className={styles.list}>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "blue", marginRight: "10px" }}
              />
              <span>REFUND & CANCELLATION POLICY</span>
            </li>
            <li className={styles.list}>
              <i
                className="fa-solid fa-angle-right"
                style={{ color: "blue", marginRight: "10px" }}
              />
              <span>TERMS & CONDITIONS</span>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </div>
      <div className={styles.copyright}>
        Copyright <i className="fa-regular fa-copyright" /> 2022
      </div>
    </>
  );
};

export default Footer;
