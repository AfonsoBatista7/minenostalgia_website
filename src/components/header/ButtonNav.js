

const ButtonNav = (props) => {

    return (
      <li>
          <a href={props.href}>{props.children}</a>
      </li>
    )
};

export default ButtonNav;