import styles from "./style.module.scss";

export const NewsCard = ({ news }) => {
  const { category, title, content, author } = news;
  return (
    <li className={styles.newsCard}>
      <h2>{title}</h2>
      <div>
        <h3><b>Autor:</b> {author}</h3>
        <h3>{category}</h3>
      </div>
      <p>{content}</p>
    </li>
  );
}