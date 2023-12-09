
import "./Home.css"; 
function Home() {
    return(
        <div>
            <header>
                <h1>Riot Games: Igniting Passion, Unleashing Play</h1>
                </header>
                <section className="home">
                    <div className="image-container">
                     <img src = "./riot games.jfif" alt="riot games.jfif"/>
                     <img src = "./league of legends.jpeg" alt="league of legends.jpeg"/>
                     <img src = "./valorant.jfif" alt="valorant.jfif"/>
                     <img src = "riot-games co-workers.png" alt = "riot-games co-workers.png"></img>
                    </div>
                    <div className = "company-description">
                       <p>
                       Riot Games, founded in 2006, stands as a trailblazing force in the dynamic and ever-evolving realm of gaming. Headquartered in Los Angeles, California, the company has emerged as a global leader in the development and publishing of cutting-edge video games. Fueled by a commitment to innovation, Riot Games has etched its name in the industry by crafting immersive and iconic titles that captivate millions of players worldwide.
                       </p>
                       <p>
                       At the heart of Riot Games' success is its flagship creation, "League of Legends." This multiplayer online battle arena (MOBA) game has not only become a cultural phenomenon but has also set the standard for competitive gaming. With a thriving esports ecosystem, including the renowned League of Legends World Championship, Riot Games has played a pivotal role in elevating gaming into a mainstream spectator sport.
                       </p>
                       <p>
                       Beyond its groundbreaking flagship title, Riot Games has diversified its portfolio with new ventures, including the team-based first-person shooter "Valorant" and the digital card game "Legends of Runeterra." These endeavors showcase the company's versatility and commitment to delivering unparalleled gaming experiences across various genres.
                       </p>
                       <p>
                       Riot Games is not just a game developer; it's a community-driven powerhouse. With a steadfast dedication to fostering a positive and inclusive gaming culture, Riot Games actively engages with its player base. Through continuous updates, community events, and open communication channels, the company has cultivated a loyal and passionate fanbase, forming a symbiotic relationship that fuels the ongoing success of Riot Games in the ever-evolving landscape of the gaming industry.
                       </p>
                    </div>
                </section>
        </div>
    );
};
export default Home;