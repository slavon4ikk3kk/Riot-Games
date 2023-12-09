import React from "react";
import './Services.css';
function Services() {
    return(
        <div className="services-container">
            <h2>our services</h2>
            <div className="service">
                <img src = "games.jpg" alt = "services-post 1"></img>
                <div className="service-details">
                    <h3>Web Developers</h3>
                    <p>
                    At Creative Designs, we are excited to present our flagship service: PixelPerfection™. This service is meticulously crafted to elevate your brand to new heights through impeccable web design. Our team of skilled designers pays attention to every pixel, ensuring a visually stunning and user-friendly website that captivates your audience. From intuitive navigation to visually striking graphics, PixelPerfection™ goes beyond aesthetics, creating an immersive online experience that reflects the essence of your brand. Choose PixelPerfection™, and let your website become a digital masterpiece.
                    </p>
                </div>
            </div>
            <div className="service">
            <img src = "games.jpg" alt = "sevices-post 1"></img>
                <div className="service-details">
                    <h3>Digital marketing</h3>
                    <p>
                    Responsive Harmony™ is our answer to the dynamic digital landscape, where user experience across devices is paramount. This service from Creative Designs guarantees a seamless web development process that adapts flawlessly to various screen sizes and devices. Whether your audience is accessing your site on a desktop, tablet, or smartphone, Responsive Harmony™ ensures that your website looks and functions optimally. Our team employs cutting-edge technologies and coding practices to deliver a responsive design that not only meets but exceeds the expectations of modern users. Embrace the future of web development with Responsive Harmony™ and ensure your brand shines across all platforms.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Services;