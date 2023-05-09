import style from "./layout.module.css";

const Layout = (props) => {

  return (
    <div style={style.layout}>
      {props.children}
    </div>
  );
}

export default Layout;