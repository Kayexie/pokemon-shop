const Pokeball  = require('../../assets/pokeball.png');
const Pokemongo  = require('../../assets/pokemongo.png');
const Octocat  = require('../../assets/octocat.png');

export default function Footer() {
    return(
        <div className="footer">
            <div className="logo">
               <a target='_blank' rel='noreferrer' href="https://www.pokemon.com/us/">
                     <img src={Pokeball} alt="pokemon official" width="30"/> 
               </a>
            </div>
            <div className="logo">
               <a target='_blank' rel='noreferrer' href="https://pokemongolive.com/en/">
                     <img src={Pokemongo} alt="pokebmon go" width="30"/> 
               </a>
            </div>
            <div className="logo">
               <a target='_blank' rel='noreferrer' href="https://github.com/Kayexie/pokemon-shop">
                     <img src={Octocat} alt="github" width="30"/> 
               </a>
            </div>
            <div></div>
            <div></div>
        </div>
    )
}
