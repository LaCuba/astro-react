import { NAVIGATION_ITEMS } from "./const";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.base}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.navigation}>
        {NAVIGATION_ITEMS.map((item) => {
          return (
            <a key={item.link} href={item.link}>
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
