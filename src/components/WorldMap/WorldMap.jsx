import styles from "./WorldMap.module.scss";
import map from "images/WorldMap.svg";
export default function WorldMap() {
  return (
    <div className={styles.container}>
      <p className={styles.subheading}>ما همه جا هستیم</p>
      <h2 className={styles.secondary}>
        در هر کجای دنیا که باشید میتوانید از خدمات ما استفاده کنید ما محدود به
        مرز ها نیستیم!
      </h2>
      <img className={styles.map} src={map} alt="نقشه جهان" />
    </div>
  );
}
