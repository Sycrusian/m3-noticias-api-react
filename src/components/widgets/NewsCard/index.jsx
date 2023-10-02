import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { Button } from "../Button";

export const NewsCard = ({ news}) => {
  
  useEffect(() => {
    const getFavorite = () => {
      const favorites = JSON.parse(localStorage.getItem("@fakenews"));
      const fav = favorites ? favorites.includes(id) : favorites;
      setFavorite(fav);
    }
    getFavorite();
  }, [])
  
  
  const [ favorite, setFavorite ] = useState(false);
  const { id, category, title, content, author } = news;



  const toggleFavorite = () => {
    setFavorite(!favorite);
    const favorites = JSON.parse(localStorage.getItem("@fakenews"));
    if (!favorite) {
      if (!favorites.includes(id)) {
        favorites.push(id);
      }
      localStorage.setItem("@fakenews", JSON.stringify(favorites));
    } else {
      if (favorites.includes(id)) {
        const index = favorites.indexOf(id);
        index >= 0 && favorites.splice(index, 1);
        localStorage.setItem("@fakenews", JSON.stringify(favorites));
      }
    }
  }

  return (
    <li className={`${styles.newsCard} ${favorite && styles.favorite}`}>
      <h2>{title}</h2>
      <div>
        <h3><b>Autor:</b> {author}</h3>
        <h3>{category}</h3>
      </div>
      <p>{content}</p>
      <Button click={toggleFavorite}>{favorite ? "Desfavoritar" : "Favoritar"}</Button>
    </li>
  );
}