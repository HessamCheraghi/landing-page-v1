import styles from "./Logo.module.scss";
import { ReactComponent as WheelLogo } from "images/WheelLogo.svg";

export default function Logo() {
  return (
    <a href="#hero" className={styles.container}>
      <WheelLogo className={styles.logoImg} />
      <p className={styles.logoText}>الو بنزین</p>
    </a>
  );
}
