import styles from "./style.module.scss";
// import { regularCursor, waitCursor } from "../../services/cursor";
// import { Button } from "../widgets/Button";
// import { blogApi } from "../../services/api";

export const Header = ({setNewsList}) => {
  // const getNews = async () => {
  //   try {
  //     waitCursor();
  //     const { data } = await blogApi.get("/news");
  //     setNewsList(data);
  //   }
  //   catch(error) {
  //     console.error(error.message);
  //   }
  //   finally {
  //     regularCursor();
  //   }
  // }

  return (
    <header className={styles.header}>
      <div>
        <h1>* Notícias *</h1>
      </div>
      {/* <Button click={getNews}>Carregar</Button> */}
    </header>
  );
}