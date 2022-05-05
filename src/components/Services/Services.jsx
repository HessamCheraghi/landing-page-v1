import styles from "./Services.module.scss";
import service1 from "images/Service1.png";
import service2 from "images/Service2.png";
import service3 from "images/Service3.png";
import service4 from "images/Service4.png";
import { motion } from "framer-motion";
export default function Services() {
  const variants = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: 120 },
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
        خدمات
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
        className={styles.grid}
      >
        <div className={styles.item}>
          <img src={service2} alt="" />
        </div>
        <div className={styles.item}>
          <img src={service1} alt="" />
        </div>
        <div className={styles.item}>
          <img src={service3} alt="" />
        </div>
        <div className={styles.item}>
          <img src={service4} alt="" />
        </div>
      </motion.div>
    </div>
  );
}
