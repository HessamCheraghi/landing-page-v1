import styles from "./Header.module.scss";
import { useState } from "react";
import cx from "classnames";
import Nav from "./Nav";
import Logo from "./Logo";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = function (e) {
    e.preventDefault();

    // matching href to id
    if (e.target.closest("a")) {
      const id = e.target.closest("a").getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header onClick={handleClick} id="header" className={styles.container}>
      <Logo delay={0} />
      <Nav mobileNav={isOpen} />
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className={cx(styles.mobileNav, { [styles.mobileNavOpen]: isOpen })}
      >
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
      </button>
      <div className={styles.wrapper} onClick={() => setIsOpen(false)}></div>
    </header>
  );
}
