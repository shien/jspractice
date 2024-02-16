import React from "react"
import './HeaderLink.css'

type HeaderMenu = {
    menu: string
}
const HeaderLink: React.FC<HeaderMenu> = (props) => {
    return (
        <li>{props.menu}</li>
    )
}

export default HeaderLink;