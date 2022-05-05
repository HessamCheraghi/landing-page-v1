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

  return (
    <nav
      onMouseOver={handelHover.bind(0.3)}
      onMouseOut={handelHover.bind(1)}
      className={styles.main}
    >
      <ul className={styles.list}>
        {list.map((item, i) => (
          <motion.li
            initial={{ y: "-200%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 + animationDelay }}
            key={item.label}
          >
            <a href={item.href} className={styles.link}>
              {item.label}
            </a>
          </motion.li>
        ))}
        <li>
          <motion.button
            initial={{ y: "-200%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1 + animationDelay, duration: 0.2 }}
            className={styles.download}
          >
            دانلود اپلیکیشن برای موبایل
          </motion.button>
        </li>
      </ul>
    </nav>
  );
}
