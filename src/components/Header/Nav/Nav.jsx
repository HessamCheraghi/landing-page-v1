import styles from "./Nav.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import cx from "classnames";

export default function Nav({ mobileNav }) {
  // data
  const list = [
    { label: "امکانات", href: "#features" },
    { label: "مناطق تحت پوشش", href: "#world-map" },
    { label: "نظرات مشتریان", href: "#reviews" },
    { label: "خدمات", href: "#services" },
    { label: "تماس با ما", href: "#cta" },
  ];

  // responsiveness
  const [width, setWindowWidth] = useState(945);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  // hover effects
  const handelHover = function (e) {
    if (e.target.tagName.toLowerCase() === "a") {
      const link = e.target;
      const siblings = link.closest("nav").querySelectorAll("a");

      siblings.forEach((el) => {
        if (el !== link) {
          el.style.opacity = this;
        }
      });
    }
  };

  // responsive animations
  const linkVariants = {
    visible: (i) => ({
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2 + 2,
      },
    }),
    visibleMobile: (i) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.11,
      },
    }),
    hidden: {
      y: -50,
      x: 0,
      opacity: 0,
    },
    hiddenMobile: {
      x: "-200%",
      y: 0,
      opacity: 0,
    },
  };

  const buttonVariants = {
    visible: {
      y: 0,
      x: 0,
      transition: { delay: 3, duration: 0.2 },
    },
    visibleMobile: {
      x: 0,
      y: 0,
      transition: { delay: 0.4, duration: 0.2 },
    },
    hidden: {
      y: "-200%",
      x: 0,
    },
    hiddenMobile: {
      x: "-200%",
      y: 0,
    },
  };
  return (
    <nav
      onMouseOver={handelHover.bind(0.3)}
      onMouseOut={handelHover.bind(1)}
      className={cx(styles.main, { [styles.mobileNavOpen]: mobileNav })}
    >
      <ul className={styles.list}>
        {list.map((item, i) => (
          <motion.li
            custom={i}
            animate={
              width <= 944 && mobileNav
                ? "visibleMobile"
                : width <= 944 && !mobileNav
                ? "hiddenMobile"
                : "visible"
            }
            initial={
              width <= 944 && mobileNav
                ? "hiddenMobile"
                : width <= 944 && !mobileNav
                ? "visibleMobile"
                : "hidden"
            }
            variants={linkVariants}
            key={item.label}
          >
            <a href={item.href} className={styles.link}>
              {item.label}
            </a>
          </motion.li>
        ))}
        <li>
          <motion.button
            initial={
              width <= 944 && mobileNav
                ? "hiddenMobile"
                : width <= 944 && !mobileNav
                ? "visibleMobile"
                : "hidden"
            }
            animate={
              width <= 944 && mobileNav
                ? "visibleMobile"
                : width <= 944 && !mobileNav
                ? "hiddenMobile"
                : "visible"
            }
            variants={buttonVariants}
            className={styles.download}
          >
            دانلود اپلیکیشن برای موبایل
          </motion.button>
        </li>
      </ul>
    </nav>
  );
}
