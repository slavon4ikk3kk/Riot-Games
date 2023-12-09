import React from "react";
import "./Blog.css";
function Blog() {
    return(
        <div className="blog-container">
            <h2>Latest Blog-posts</h2>
            <div className="blog-post">
                <img src = "games.jpg" alt = "Blog-post 1"></img>
                <div className="blog-content">
                    <h3>Revolutionizing Gameplay: Riot Games' Cutting-Edge Tech Breakthrough</h3>
                    <p>
                    In the ever-evolving landscape of gaming, Riot Games continues to push the boundaries of innovation. Today, we are thrilled to unveil our latest breakthrough in gaming technology, set to revolutionize the way players experience their favorite titles. From state-of-the-art graphics enhancements to groundbreaking AI integration, Riot Games is committed to delivering an unparalleled gaming experience. Join us on this journey as we explore the future of gaming and how Riot Games is at the forefront of this exciting revolution.
                    </p>
                </div>
            </div>
            <div className="blog-post">
            <img src = "games.jpg" alt = "Blog-post 1"></img>
                <div className="blog-content">
                    <h3>Crafting Masterpieces: A Glimpse into the Development of Riot Games' Latest Blockbuster</h3>
                    <p>
                    Ever wondered what goes on behind the scenes in the creation of a gaming masterpiece? Today, we invite you to step into the world of Riot Games' latest blockbuster title. From the initial concept to the final release, our team of passionate developers, designers, and artists has poured their creativity and expertise into every aspect of the game. In this exclusive behind-the-scenes look, discover the challenges, triumphs, and secrets that went into bringing this epic adventure to life. Get ready to be amazed as we pull back the curtain on the making of one of the most anticipated games of the year.Ever wondered what goes on behind the scenes in the creation of a gaming masterpiece? Today, we invite you to step into the world of Riot Games' latest blockbuster title. From the initial concept to the final release, our team of passionate developers, designers, and artists has poured their creativity and expertise into every aspect of the game. In this exclusive behind-the-scenes look, discover the challenges, triumphs, and secrets that went into bringing this epic adventure to life. Get ready to be amazed as we pull back the curtain on the making of one of the most anticipated games of the year.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Blog;