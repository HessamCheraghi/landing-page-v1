import styles from "./TexBox.module.scss";

export default function TexBox() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        هر جا که به کمک فوری نیاز دارید
        <br />
        ما اونجا هستیم
      </h1>
      <p className={styles.subheader}>
        آیا از مشکلات وسیله نقلیه خود خسته شدید؟
        <br />
        بارها شده که وسیله نقلیه ما وسط راه از کار افتاده و توی راه موندیم دیگه
        نگران این وضعیت نباشید ما اینجا هستیم تا به شما کمک کنیم. با الو بنزین
        هیچوقت نگران توی راه بنزین تموم کردن توی راه نباشید
      </p>
      <button className={styles.download}>دانلود اپلیکیشن</button>
    </div>
  );
}
