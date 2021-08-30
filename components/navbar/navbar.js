import Hamburger from './hamburger-menu';

export default function Navbar(props) {
    return (
        <nav className={` flex flex-row justify-end ${props.layout}`}>
            <Hamburger />
        </nav>
    );
}
