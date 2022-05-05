import styles from "./CTA.module.scss";
import phone from "images/phone.png";

export default function CTA() {
  return (
    <div id="cta" className={styles.container}>
      <img src={phone} alt="تلفن همراه" />
      <div className={styles.textBox}>
        <h2 className={styles.secondary}>
          عضو خبرنامه ما بشید تا از آخرین تخفیفات ما بهره مند شید
        </h2>
        <p className={styles.subheading}>
          این یک متن ساختگی با هدف سادگی و نامفهوم بودن برای استفاده ی طراحان
          گرافیک است. از صنعت چاپ متون روزنامه و مجله در ستون و سطر
        </p>
        <form className={styles.mailbox}>
          <input type="email" name="email" placeholder="ایمیل شما" required />
          <button className={styles.submit}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
