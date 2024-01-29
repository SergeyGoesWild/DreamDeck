import { useEffect, useState } from "react";
import FooterComponent from "../component/footer/footerComponent";
import "./App.css";
import "./Responsive.css";
import './components/Header.css';
import './components/Tabs.css';
import Header from './components/Header';
import DeckTab from './components/DeckTab';
import SearchTab from './components/SearchTab';
import ContentSearch from './components/ContentSearch';
import ContentDeck from "./components/ContentDeck";

function App() {
  const url = "https://api.tcgdex.net/v2/en/cards";
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (arg) => {
    setActiveTab(arg);
  };

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <div className="search-and-deck-tabs">
        <div onClick={() => handleTabClick(1)}>
        <SearchTab/>
        </div>
        <div onClick={() => handleTabClick(2)}>
        <DeckTab/>
        </div>
      </div>
      <div className="content-of-tab">
      {activeTab === 1 && <ContentSearch/>}
      {activeTab === 2 && <ContentDeck/>}
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
