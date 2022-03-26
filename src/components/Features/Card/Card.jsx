import styles from "./Card.module.scss";

export default function Card({ data }) {
  return (
    <>
      <div className={styles.background}>
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
      </div>
    </>
  );
}
