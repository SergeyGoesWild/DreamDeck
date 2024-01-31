import SearchInput from "/Users/youronlyfriend/Documents/WildCode/DreamDeck/src/components/searchsystem/SearchInput.jsx";
import CardListBox from "/Users/youronlyfriend/Documents/WildCode/DreamDeck/src/components/cardsystem/cardboxName/CardListBox.jsx";

function ContentSearch(){
    return (
        <div className="content-search">
        <p>Content of SEARCH tab</p>
        <div>
          <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
          <CardListBox cards={cards} />
        </div>
        </div>
    );
};

export default ContentSearch;