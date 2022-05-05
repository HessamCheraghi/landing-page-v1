import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import HeroPNG from "images/Hero.png";
import HeroWEBP from "images/Hero.webp";

export default function Hero() {
  return (
    <div className={styles.background}>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 1, delay: 1 }}
        className={styles.container}
      >
        <div className={styles.textBox}>
          <h1 className={styles.header}>
            هر جا که به کمک فوری نیاز داشتید
            <br />
            ما اونجا هستیم
          </h1>
          <p className={styles.subheader}>
            بارها شده که وسیله نقلیه ما وسط راه از کار افتاده و توی راه موندیم
            دیگه نگران این وضعیت نباشید ما اینجا هستیم تا به شما کمک کنیم. با
            الو بنزین هیچوقت نگران بنزین تموم کردن توی راه نباشید
          </p>
          <button className={styles.download}>دانلود اپلیکیشن</button>
        </div>
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
      </motion.div>
    </div>
  );
}
