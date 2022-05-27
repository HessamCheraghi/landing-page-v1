import styles from "./Card.module.scss";
import { motion } from "framer-motion";

export default function Card({ data, delay }) {
  return (
    <motion.div
      viewport={{ once: true, amount: "some", margin: "-200px 0px 0px 0px" }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={styles.background}
    >
      {data.background}
      <div
        className={styles.card}
        style={{
          "--color-background": data.colors.background,
          "--color-button": data.colors.button,
          "--color-text": data.colors.text,
        }}
      >
        <div className={styles.cardImg}>{data.img}</div>
        <div className={styles.content}>
          <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.description}>{data.description}</p>
        </div>
        <button className={styles.explore}>ببین چه خبره</button>
      </div>
    </motion.div>
  );
}
