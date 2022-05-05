import styles from "./Header.module.scss";

import Nav from "./Nav";
import Logo from "./Logo";
export default function Header() {
  return (
    <header className={styles.container}>
      <Logo delay={0} />
      <Nav delay={2} />
      {/*  <button class={styles.mobileNav}/> */}
    </header>
  );
}
