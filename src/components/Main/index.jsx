import styles from "./style.module.scss";
import { NewsCard } from "../widgets/NewsCard";

export const Main = ({ newsList }) => {
  return (
    <main className={styles.main}>
      <ul>
        {newsList.map(news => <NewsCard key={news.id} news={news} />)}
      </ul>
    </main>
  );
}