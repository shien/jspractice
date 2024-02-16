import React from "react";

const today = new Date();

const Footer: React.FC = () => {
    return (
        <footer>{today.getFullYear()} TEST All rights reserved.</footer>
    );
};


export default Footer;