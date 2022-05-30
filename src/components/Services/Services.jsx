import styles from "./Services.module.scss";
import service1 from "images/Service1.png";
import service2 from "images/Service2.png";
import service3 from "images/Service3.png";
import service4 from "images/Service4.png";
export default function Services() {
  return (
    <div id="services" className={styles.container}>
      <p className={styles.subheading}>خدمات</p>
      <h2 className={styles.secondary}>راه حل ایده آل برای وسایل نقلیه شما</h2>
      <div className={styles.grid}>
        <div className={styles.item}>
          <img src={service2} alt="service2" />
        </div>
        <div className={styles.item}>
          <img src={service1} alt="service1" />
        </div>
        <div className={styles.item}>
          <img src={service3} alt="service3" />
        </div>
        <div className={styles.item}>
          <img src={service4} alt="service4" />
        </div>
      </div>
    </div>
  );
}
