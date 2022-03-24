import styles from "./Nav.module.scss";

export default function Nav() {
  const list = [
    { label: "امکانات", href: "#" },
    { label: "خدمات", href: "#" },
    { label: "نظرات مشتریان", href: "#" },
    { label: "سوالات متداول", href: "#" },
    { label: "تماس با ما", href: "#" },
  ];

  return (
    <nav className={styles.main}>
      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.label}>
            <a href={item.href} className={styles.link}>
              {item.label}
            </a>
          </li>
        ))}
        <li>
          <button className={styles.download}>
            دانلود اپلیکیشن برای موبایل
          </button>
        </li>
      </ul>
    </nav>
  );
}
