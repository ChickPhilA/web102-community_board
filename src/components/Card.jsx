/* The character card will pass in props such as character picture, name, description, and Narutopedia link. */

/*
Character object props:
-name
-image
-alt (alt description for image)
-team name
-description
-color theme
*/


const Card = (character) => {
    return(
        <div className="card">
            <img src={character.image} alt={character.alt}></img>
            <h3 className="card-name" style={{backgroundColor: character.color}}> {character.name} </h3>
            <p className="card-team">{character.team}</p>
            <div className="card-info">
                <p className="card-description"> {character.description} </p>
                <a href={character.link} target="_blank"> Learn more about {character.name}!</a>
            </div>
        </div>
    )
}

export default Card;