import Card from './Card.jsx'

const CommunityBoard = () => {
    return (
        /* We want to put a grid here, two rows, five columns, of all of Konoka's shinobi. */
        <div className="container">
            <Card name = 'Naruto Uzumaki'
            image="https://i.redd.it/ldsg25lcy9781.jpg"
            alt="Naruto Uzumaki as a teenager"
            description="The Jinchuuruki of the Nine Tails and the Hero of the Hidden Leaf.
            7th Hokage of Konohagakure."
            color="#8b0000"
            link="https://naruto.fandom.com/wiki/Naruto_Uzumaki"
            />
        </div>
    )
}

export default CommunityBoard