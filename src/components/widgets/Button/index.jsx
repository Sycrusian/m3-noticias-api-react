import styles from "./style.module.scss";

export const Button = ({children, click}) => {
  return (
    <button className={styles.button} onClick={click}>
      {children}
    </button>
  );
}