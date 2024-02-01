import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import FooterComponent from "./components/footercomponent/FooterComponent";
import MainBody from "./components/mainbody/MainBody";
import useInfiniteScroll from "./components/infinitescroll/useInfiniteScroll";
import "./App.css";

const url = "https://api.tcgdex.net/v2/en/cards";
import './components/header/Header.css';
const batchSize = 100;

function App() {
  const [data, setData] = useState({ cards: [], loading: true, error: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedCards, setDisplayedCards] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const cardsWithImages = result
          .filter((card) => card.image)
          .map((card) => ({
            ...card,
            image: `${card.image}/low.webp`,
          }));
        setData({ cards: cardsWithImages, loading: false });
        console.log(result); // a retirer
      })
      .catch((error) => setData({ ...data, error }))
      .finally(() => setData((prevData) => ({ ...prevData, loading: false })));
  }, []);

  useEffect(() => {
    const filteredCards = data.cards
      .filter((card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .slice(0, batchSize);
    setDisplayedCards(filteredCards);
  }, [searchTerm, data]);

  const loadMoreCards = () => {
    const newCards = data.cards
      .filter((card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
      .slice(displayedCards.length, displayedCards.length + batchSize);
    setDisplayedCards((prev) => [...prev, ...newCards]);
  };

  useInfiniteScroll(loadMoreCards);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (data.loading) {
    return <div>Loading...</div>;
  } else if (data.error) {
    return <div>Error loading data: {data.error}</div>;
  }

  return (
    <>
      <Header />
      <MainBody
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        cards={displayedCards}
      />
      <FooterComponent />
    </>
  );
}

export default App;
