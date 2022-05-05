import styles from "./Reviews.module.scss";
import data from "./data";
import { motion } from "framer-motion";

export default function Reviews() {
  const variants = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: 120 },
  };
  return (
    <div id="reviews" className={styles.container}>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className={styles.subheading}
      >
        نظرات مشتری
      </motion.p>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className={styles.secondary}
      >
        مشتریان سابق درباره ما چی میگن؟
      </motion.h2>
      <div className={styles.cardContainer}>
        {data.map((datum) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={variants}
            key={datum.id}
            className={styles.card}
          >
            <div className={styles.avatarBox}>
              <div className={styles.avatar}>
                <img src={datum.avatar} alt="avatar" />
              </div>
              <p className={styles.name}>{datum.name}</p>
            </div>
            <p className={styles.text}>{datum.review}</p>
            <img className={styles.rate} src={datum.rate} alt="rating" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
