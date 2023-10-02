import "./styles/index.scss";
import { useEffect, useState } from "react";
import { blogApi } from "./services/api";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const App = () => {
  const [ newsList, setNewsList ] = useState([]);

  useEffect(() => { getNews() }, []);

  const getNews = async () => {
    try {
      const { data } = await blogApi.get("/news");
      setNewsList(data);
    }
    catch(error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <Header setNewsList={setNewsList}/>
      <Main newsList={newsList} />
    </>
  );
}

export default App;
