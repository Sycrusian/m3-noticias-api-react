import "./styles/index.scss";
import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const App = () => {
  const [ newsList, setNewsList ] = useState([]);

  return (
    <>
      <Header setNewsList={setNewsList}/>
      <Main newsList={newsList} />
    </>
  );
}

export default App;
