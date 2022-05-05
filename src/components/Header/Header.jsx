import styles from "./Header.module.scss";

import Nav from "./Nav";
import Logo from "./Logo";
export default function Header() {
  const handleClick = function (e) {
    e.preventDefault();

    // matching href to id
    if (e.target.closest("a")) {
      const id = e.target.closest("a").getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header onClick={handleClick} id="header" className={styles.container}>
      <Logo delay={0} />
      <Nav delay={2} />
      {/*  <button class={styles.mobileNav}/> */}
    </header>
  );
}
