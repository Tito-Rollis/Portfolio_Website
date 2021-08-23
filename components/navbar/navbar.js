import HamburgerMenu from './hamburger-menu';

export default function Navbar(props) {
    return (
        <nav className={` flex flex-row justify-end ${props.layout}`}>
            <HamburgerMenu />
        </nav>
    );
}
