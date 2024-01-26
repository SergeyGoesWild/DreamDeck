import './SearchedCard.css';


export function SearchedCard(name, image  ) {

    return (
        <div className="character-container">
            <h1>{name}</h1>
                <img src={image} alt={name}/>   

        </div>
    );
}