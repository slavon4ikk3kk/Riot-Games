import React from "react";
import "./About.css";
function About() {
    return(
        <div className="about-container">
            <header className="header-about">
                <h2>About Us</h2>
                <p>Discover Our Story and Mission</p>
            </header>
            <div className="about-section">
            <img src = "league of legends.jpeg" alt = "image 1" className="about-image"></img>
            <p>
            Welcome to Riot Games, a leading force in the world of gaming and entertainment. Established in 2006, Riot Games has quickly risen to prominence as a trailblazer in the video game industry. Our commitment to delivering unparalleled gaming experiences has driven us to create some of the most iconic and beloved titles, including the groundbreaking multiplayer online battle arena (MOBA) game, League of Legends. With a passion for innovation and a dedication to fostering a global community of gamers, Riot Games has become synonymous with excellence in game development.
            </p>
        </div>
        <div className = "about-section">
        <img src ="valorant.jfif" alt = "image 2" className = "about-image"></img>
        <p>
        At the heart of our company is a talented and diverse team of individuals who share a common love for gaming and a relentless pursuit of excellence. We believe in the power of games to bring people together, create lasting connections, and provide a platform for self-expression. Our commitment to player satisfaction goes beyond just delivering exceptional games; it extends to our ongoing efforts to listen to our community, adapt to their needs, and continually enhance the gaming experience.
        </p>
        </div>
        <div className = "about-section">
        <img src ="riot games.jfif" alt = "image 3" className = "about-image"></img>
        <p>
        Riot Games is not only a developer of world-class games but also a champion of esports, contributing to the growth and popularity of competitive gaming on a global scale. Our dedication to the esports ecosystem is evident through the creation of the League of Legends Championship Series (LCS), which has become a cornerstone of competitive gaming, drawing millions of viewers worldwide. We are proud to be at the forefront of the esports movement, shaping the landscape and pushing the boundaries of what is possible in the world of competitive gaming.
        </p>
        </div>
        </div>
    );
};
export default About;