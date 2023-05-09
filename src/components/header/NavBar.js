import style from "./navbar.module.css";
import ButtonNav from "./ButtonNav";

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <a href="/" className="site-title">MineNostalgia</a>
            <ul className={ style.navButtons }>
                <ButtonNav href="/Home">Home</ButtonNav>
                <ButtonNav href="/History">History</ButtonNav>
                <ButtonNav href="/Stats">Stats</ButtonNav>
                <ButtonNav href="/Medals">Medals</ButtonNav>
            </ul>
            <a href="/Login" className="login">Log In</a>
        </nav>
    )
};

export default NavBar;
