import React from "react";
import "./Footer.css"

const today = new Date();

const Footer: React.FC = () => {
    return (
        
        <footer>
            <h3 className="footer">Title</h3>
            <ul className="footer">
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
            </ul>
            {today.getFullYear()} TEST All rights reserved.
        </footer>
    );
};


export default Footer;