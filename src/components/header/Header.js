import styles from "./header.module.css";

const Header = () => {
    return (
        <nav className={styles.nav}>
            <a href="/" className="site-title">MineNostalgia</a>
            <ul className={ styles.navButtons }>
                <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/History">History</a>
                </li>
            </ul>
            <a href="/Login" className="login">Log In</a>
        </nav>
    )
};

export default Header;
