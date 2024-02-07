import { useState } from "react";

const initialDecks = [
  {
    id: 1,
    name: "Deck 1",
    cards: [
      {
        id: "ex16-1",
        localId: "1",
        name: "Aggron",
        image: "https://assets.tcgdex.net/en/ex/ex16/1",
      },
      {
        id: "ex1-1",
        localId: "1",
        name: "Aggron",
        image: "https://assets.tcgdex.net/en/ex/ex1/1",
      },
      {
        id: "ex2-1",
        localId: "1",
        name: "Armaldo",
        image: "https://assets.tcgdex.net/en/ex/ex2/1",
      },
      {
        id: "ex4-1",
        localId: "1",
        name: "Team Aqua's Cacturne",
        image: "https://assets.tcgdex.net/en/ex/ex4/1",
      },
      {
        id: "ex7-1",
        localId: "1",
        name: "Azumarill",
        image: "https://assets.tcgdex.net/en/ex/ex7/1",
      },
      {
        id: "ex10-1",
        localId: "1",
        name: "Ampharos",
        image: "https://assets.tcgdex.net/en/ex/ex10/1",
      },
      {
        id: "gym2-1",
        localId: "1",
        name: "Blaine's Arcanine",
        image: "https://assets.tcgdex.net/en/gym/gym2/1",
      },
      {
        id: "gym1-1",
        localId: "1",
        name: "Blaine's Moltres",
        image: "https://assets.tcgdex.net/en/gym/gym1/1",
      },
      {
        id: "hgss1-1",
        localId: "1",
        name: "Arcanine",
        image: "https://assets.tcgdex.net/en/hgss/hgss1/1",
      },
      {
        id: "hgss4-1",
        localId: "1",
        name: "Aggron",
        image: "https://assets.tcgdex.net/en/hgss/hgss4/1",
      },
      {
        id: "hgss3-1",
        localId: "1",
        name: "Bellossom",
        image: "https://assets.tcgdex.net/en/hgss/hgss3/1",
      },
      {
        id: "hgss2-1",
        localId: "1",
        name: "Jirachi",
        image: "https://assets.tcgdex.net/en/hgss/hgss2/1",
      },
      {
        id: "lc-1",
        localId: "1",
        name: "Alakazam",
        image: "https://assets.tcgdex.net/en/lc/lc/1",
      },
      { id: "2011bw-1", localId: "1", name: "Snivy" },
      { id: "2012bw-1", localId: "1", name: "Servine" },
      { id: "2014xy-1", localId: "1", name: "Weedle" },
      { id: "2015xy-1", localId: "1", name: "Treecko" },
      { id: "2016xy-1", localId: "1", name: "Vulpix" },
      { id: "2017sm-1", localId: "1", name: "Rowlet" },
      { id: "2018sm-1", localId: "1", name: "Growlithe" },
      { id: "2019sm-1", localId: "1", name: "Caterpie" },
      { id: "2021swsh-1", localId: "1", name: "Bulbasaur" },
      {
        id: "neo4-1",
        localId: "1",
        name: "Dark Ampharos",
        image: "https://assets.tcgdex.net/en/neo/neo4/1",
      },
      {
        id: "neo2-1",
        localId: "1",
        name: "Espeon",
        image: "https://assets.tcgdex.net/en/neo/neo2/1",
      },
      {
        id: "neo1-1",
        localId: "1",
        name: "Ampharos",
        image: "https://assets.tcgdex.net/en/neo/neo1/1",
      },
      {
        id: "neo3-1",
        localId: "1",
        name: "Ampharos",
        image: "https://assets.tcgdex.net/en/neo/neo3/1",
      },
      {
        id: "si1-1",
        localId: "1",
        name: "Mew",
        image: "https://assets.tcgdex.net/en/neo/si1/1",
      },
      {
        id: "pl4-1",
        localId: "1",
        name: "Charizard",
        image: "https://assets.tcgdex.net/en/pl/pl4/1",
      },
      {
        id: "pl1-1",
        localId: "1",
        name: "Ampharos",
        image: "https://assets.tcgdex.net/en/pl/pl1/1",
      },
      {
        id: "ru1-1",
        localId: "1",
        name: "Venusaur",
        image: "https://assets.tcgdex.net/en/pl/ru1/1",
      },
      {
        id: "pl2-1",
        localId: "1",
        name: "Arcanine",
        image: "https://assets.tcgdex.net/en/pl/pl2/1",
      },
      {
        id: "pl3-1",
        localId: "1",
        name: "Absol G",
        image: "https://assets.tcgdex.net/en/pl/pl3/1",
      },
      {
        id: "np-1",
        localId: "1",
        name: "Kyogre ex",
        image: "https://assets.tcgdex.net/en/pop/np/1",
      },
      {
        id: "pop1-1",
        localId: "1",
        name: "Blaziken",
        image: "https://assets.tcgdex.net/en/pop/pop1/1",
      },
      {
        id: "pop2-1",
        localId: "1",
        name: "Entei",
        image: "https://assets.tcgdex.net/en/pop/pop2/1",
      },
      {
        id: "pop3-1",
        localId: "1",
        name: "Blastoise",
        image: "https://assets.tcgdex.net/en/pop/pop3/1",
      },
      {
        id: "pop4-1",
        localId: "1",
        name: "Chimecho δ",
        image: "https://assets.tcgdex.net/en/pop/pop4/1",
      },
      {
        id: "pop5-1",
        localId: "1",
        name: "Ho-Oh",
        image: "https://assets.tcgdex.net/en/pop/pop5/1",
      },
      {
        id: "pop6-1",
        localId: "1",
        name: "Bastiodon",
        image: "https://assets.tcgdex.net/en/pop/pop6/1",
      },
      {
        id: "pop7-1",
        localId: "1",
        name: "Ampharos",
        image: "https://assets.tcgdex.net/en/pop/pop7/1",
      },
      {
        id: "pop8-1",
        localId: "1",
        name: "Heatran",
        image: "https://assets.tcgdex.net/en/pop/pop8/1",
      },
      {
        id: "pop9-1",
        localId: "1",
        name: "Garchomp",
        image: "https://assets.tcgdex.net/en/pop/pop9/1",
      },
      {
        id: "sv03.5-001",
        localId: "001",
        name: "Bulbasaur",
        image: "https://assets.tcgdex.net/en/sv/sv03.5/001",
      },
      {
        id: "sv03-001",
        localId: "001",
        name: "Oddish",
        image: "https://assets.tcgdex.net/en/sv/sv03/001",
      },
      {
        id: "sv02-001",
        localId: "001",
        name: "Hoppip",
        image: "https://assets.tcgdex.net/en/sv/sv02/001",
      },
      {
        id: "sv04-001",
        localId: "001",
        name: "Surskit",
        image: "https://assets.tcgdex.net/en/sv/sv04/001",
      },
      {
        id: "sv01-001",
        localId: "001",
        name: "Pineco",
        image: "https://assets.tcgdex.net/en/sv/sv01/001",
      } /* ... other cards */,
    ],
  },
];

const DeckSection = () => {
  const [decks, setDecks] = useState(initialDecks);
  const [newDeckName, setNewDeckName] = useState("");

  const toggleDeckOpen = (id) => {
    const updatedDecks = decks.map((deck) => {
      if (deck.id === id) {
        return { ...deck, isOpen: !deck.isOpen }; 
      }
      return deck;
    });
    setDecks(updatedDecks);
  };

  const addDeck = () => {
    const newDeck = {
      id: Date.now(),
      name: newDeckName,
      cards: [],
    };
    setDecks([...decks, newDeck]);
    setNewDeckName("");
  };

  const removeDeck = (deckId) => {
    setDecks(decks.filter((deck) => deck.id !== deckId));
  };

  const removeCardFromDeck = (deckId, cardId) => {
    const updatedDecks = decks.map((deck) => {
      if (deck.id === deckId) {
        return {
          ...deck,
          cards: deck.cards.filter((card) => card.id !== cardId),
        };
      }
      return deck;
    });
    setDecks(updatedDecks);
  };

            return (
              <div className="deck-section">
                <h2>Deck List</h2>
                <input
                  type="text"
                  value={newDeckName}
                  onChange={(e) => setNewDeckName(e.target.value)}
                  placeholder="New deck name"
                />
                <button onClick={addDeck}>Add Deck</button>
                <ul>
                  {decks.map((deck) => (
                    <li key={deck.id}>
                      <div onClick={() => toggleDeckOpen(deck.id)}>
                        {deck.name}
                        <button onClick={() => removeDeck(deck.id)}>Remove Deck</button>
                      </div>
                      {deck.isOpen && (
                        <ul>
                          {deck.cards.map((card) => (
                            <li key={card.id}>
                              {card.name}
                              <button onClick={() => removeCardFromDeck(deck.id, card.id)}>
                                Remove Card
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          };
            export default DeckSection;
