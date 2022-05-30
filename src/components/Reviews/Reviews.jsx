import styles from "./Reviews.module.scss";
import data from "./data";

export default function Reviews() {
  return (
    <div id="reviews" className={styles.container}>
      <p className={styles.subheading}>نظرات مشتری</p>
      <h2 className={styles.secondary}>مشتریان سابق درباره ما چی میگن؟</h2>
      <div className={styles.cardContainer}>
        {data.map((datum) => (
          <div key={datum.id} className={styles.card}>
            <div className={styles.avatarBox}>
              <div className={styles.avatar}>
                <img src={datum.avatar} alt="avatar" />
              </div>
              <p className={styles.name}>{datum.name}</p>
            </div>
            <p className={styles.text}>{datum.review}</p>
            <img className={styles.rate} src={datum.rate} alt="rating" />
          </div>
        ))}
      </div>
    </div>
  );
}
