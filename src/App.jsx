import { useState } from "react";
import "./App.css";
import listVideoOrArticle from "./data/data";
import List from "./components/List";

function App() {
  const [list, setList] = useState(listVideoOrArticle);

  return (
    <div className="App">
      <List list={list} />
    </div>
  );
}

export default App;
