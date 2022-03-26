import styles from "./Features.module.scss";
import data from "./data";
import Card from "./Card";

export default function Features() {
  return (
    <div className={styles.container}>
      <p className={styles.subheading}>امکانات</p>
      <h2 className={styles.secondary}>راه حل ایده آل برای وسایل نقلیه شما</h2>
      <div className={styles.cardContainer}>
        {data.map((datum) => (
          <Card key={datum.id} data={datum} />
        ))}
      </div>
    </div>
  );
}
