import { useEffect, useState } from "react";
import FooterComponent from "./components/footer/footerComponent";
import { SearchedCard } from './components/search/SearchedCard';
import "./App.css";
import "./Responsive.css";

const API_URL = "https://api.tcgdex.net/v2/en/cards";
const RESULTS_PER_PAGE = 20;

function App() {
  const [cards, setCards] = useState();
  const [loading, setLoading] = useState(true);
  const [searchCard, setSearchCharacter] = useState('');
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      setError('');
      const query = `limit=${RESULTS_PER_PAGE}${searchCard ? `&nameStartsWith=${searchCard}` : ''}`;
      const response = await fetch(`${API_URL}?${query}`);
      const result = await response.json();
      setCards(result);
      console.log(result);
    } catch (error) {
      setError(`An error occurred while loading your results: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchCard]);


  const handleSearchChange = (event) => setSearchCharacter(event.target.value);
  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className='main-container'>
        <form className="search-bar-container" onSubmit={handleSearchSubmit}>
          <input
            type='search'
            className='search-bar'
            placeholder='Search your hero'
            onChange={handleSearchChange}
            value={searchCard}
          />
        </form>

        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <p>{error}</p>
        ) : (
          cards && (
            <>
              <div className='main-character-container'>
                {cards.map((character) => (
                  <SearchedCard key={character.id} characterInfo={character} />

                ))}
              </div>

            </>
          )
        )}
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
