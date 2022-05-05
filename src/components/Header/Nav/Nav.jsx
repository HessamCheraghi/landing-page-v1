import styles from "./Nav.module.scss";
import { motion } from "framer-motion";

export default function Nav({ delay }) {
  const list = [
    { label: "امکانات", href: "#" },
    { label: "خدمات", href: "#" },
    { label: "نظرات مشتریان", href: "#" },
    { label: "سوالات متداول", href: "#" },
    { label: "تماس با ما", href: "#" },
  ];
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

  // animations
  const animationDelay = delay ?? 0;
  const animateLinks = {
    visible: (i) => ({
      y: 0,
      transition: {
        delay: i * 0.2 + animationDelay,
      },
    }),
    hidden: { y: "-200%" },
  };
  const animateButton = {
    visible: {
      y: 0,
      transition: {
        delay: list.length * 0.2 + animationDelay,
        duration: 0.15,
      },
    },
    hidden: { y: "-200%" },
  };

  return (
    <nav
      onMouseOver={handelHover.bind(0.3)}
      onMouseOut={handelHover.bind(1)}
      className={styles.main}
    >
      <ul className={styles.list}>
        {list.map((item, i) => (
          <motion.li
            custom={i}
            initial="hidden"
            animate="visible"
            variants={animateLinks}
            key={item.label}
          >
            <a href={item.href} className={styles.link}>
              {item.label}
            </a>
          </motion.li>
        ))}
        <li>
          <motion.button
            initial="hidden"
            animate="visible"
            variants={animateButton}
            className={styles.download}
          >
            دانلود اپلیکیشن برای موبایل
          </motion.button>
        </li>
      </ul>
    </nav>
  );
}
