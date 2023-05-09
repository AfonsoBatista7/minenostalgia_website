import style from "./navbar.module.css";
import ButtonNav from "./ButtonNav";

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <a href="/" className="site-title">MineNostalgia</a>
            <ul className={ style.navButtons }>
                <ButtonNav href="/">Home</ButtonNav>
                <ButtonNav href="/history">History</ButtonNav>
                <ButtonNav href="/stats">Stats</ButtonNav>
                <ButtonNav href="/medals">Medals</ButtonNav>
            </ul>
            <a href="/Login" className="login">Log In</a>
        </nav>
    )
};

export default NavBar;
