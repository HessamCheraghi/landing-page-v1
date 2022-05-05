import styles from "./Features.module.scss";
import data from "./data";
import Card from "./Card";
import { motion } from "framer-motion";

export default function Features() {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 120 },
  };
  return (
    <div className={styles.container}>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className={styles.subheading}
      >
        امکانات
      </motion.p>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className={styles.secondary}
      >
        راه حل ایده آل برای وسایل نقلیه شما
      </motion.h2>
      <div className={styles.cardContainer}>
        {data.map((datum, i) => (
          <Card key={datum.id} data={datum} delay={i} />
        ))}
      </div>
    </div>
  );
}
