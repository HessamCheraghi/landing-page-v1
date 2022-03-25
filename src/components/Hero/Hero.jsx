import styles from "./Hero.module.scss";

import TextBox from "./TextBox";

import HeroPNG from "images/Hero.png";
import HeroWEBP from "images/Hero.webp";

export default function Hero() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <TextBox />
        <div className={styles.imgBox}>
          <picture>
            <source srcSet={HeroWEBP} type="image/webp" />
            <img
              src={HeroPNG}
              alt="عکس کارتونی یه مرد داخل پمپ بنزین"
              className={styles.img}
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
