import styles from "./Hero.module.scss";

import HeroPNG from "images/Hero.png";
import HeroWEBP from "images/Hero.webp";

export default function Hero() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.textBox}>
          <h1 className={styles.header}>
            هر جا که به کمک فوری نیاز داشتید
            <br />
            ما اونجا هستیم
          </h1>
          <p className={styles.subheader}>
            بارها شده که وسیله نقلیه ما وسط راه از کار افتاده و توی راه موندیم
            دیگه نگران این وضعیت نباشید ما اینجا هستیم تا به شما کمک کنیم. با
            الو بنزین هیچوقت نگران توی راه بنزین تموم کردن توی راه نباشید
          </p>
          <button className={styles.download}>دانلود اپلیکیشن</button>
        </div>
      </div>
      <div className={styles.imgBox}>
        <div className={styles.blurImg}>
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
