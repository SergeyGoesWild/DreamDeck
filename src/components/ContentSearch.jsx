import SearchInput from "./searchsystem/SearchInput.jsx";
import CardListBox from "./cardsystem/cardboxName/CardListBox.jsx";
import CardList from "./cardsystem/cardImg/CardList";

function ContentSearch({ searchTerm, onSearchChange, cards }){
    return (
        <div className="content-search">
        <p>Content of SEARCH tab</p>
        <div>
          <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
          <CardListBox cards={cards} />
        </div>
        <CardList cards={cards}/>
        </div>
    );
};

export default ContentSearch;