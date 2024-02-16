import React from "react"
import './Header.css'
import HeaderLink from "./HeaderLink.tsx"

export const Header: React.FC = () => {
    return (
        <header>
            <h1 className="header-title">Title</h1>
            <nav>
                <ul>
                    <HeaderLink menu="menu1" />
                    <HeaderLink menu="menu2" />
                    <HeaderLink menu="menu3" />
                </ul>
            </nav>
        </header>
    );
}

export default Header;