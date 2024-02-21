import './HeaderLink.css'

type HeaderMenu = {
    menu: string
}
const HeaderLink: React.FC<HeaderMenu> = (props) => {
    return (
        <li className='header'>{props.menu}</li>
    )
}

export default HeaderLink;