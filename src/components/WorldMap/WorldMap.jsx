import styles from "./WorldMap.module.scss";
import map from "images/WorldMap.svg";
import { motion } from "framer-motion";
export default function WorldMap() {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 120 },
  };
  return (
    <div id="world-map" className={styles.container}>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className={styles.subheading}
      >
        ما همه جا هستیم
      </motion.p>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        className={styles.secondary}
      >
        در هر کجای دنیا که باشید میتوانید از خدمات ما استفاده کنید ما محدود به
        مرز ها نیستیم!
      </motion.h2>
      <img className={styles.map} src={map} alt="نقشه جهان" />
    </div>
  );
}
