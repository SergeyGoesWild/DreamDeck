const AddCardButton = ({ card, addCardToDeck }) => {
    return <button onClick={() => addCardToDeck(card)}>+</button>;
  };
  export default AddCardButton;