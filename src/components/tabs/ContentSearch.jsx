import SearchInput from "../searchsystem/SearchInput.jsx";
import CardListBox from "../cardsystem/cardboxName/CardListBox.jsx";
import CardList from "../cardsystem/cardImg/CardList.jsx";

function ContentSearch({ searchTerm, onSearchChange, cards }){
    return (
        <div className="content-search">
        <div>
          <SearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
        </div>
          <CardList cards={cards}/>
        </div>
    );
};

export default ContentSearch;