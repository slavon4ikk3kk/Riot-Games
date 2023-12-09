import React from "react";
import "./Contacts.css";
function Contacts() {
    return(
        <div className="contact-container">
            <div className="contact-form">
                <h2>Get in Touch</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required/>

                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" required/>

                    <label htmlFor="message">Message:</label>
                    <textarea type="text" id="message" name="message" rows = "4" required></textarea>
 <button type = "submit">Submit</button>
 
 </form>
 </div>
    <div className = "contact-info">
        <h2>Contact Information</h2>
        <p>
            <strong>Email:</strong> mailto:info@example.com
        </p>
        <p>
            <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p>
            <strong>Address:</strong> 123 Main Street, Cityville, Country
        </p>
    </div>
            
        </div>
    );
};
export default Contacts;