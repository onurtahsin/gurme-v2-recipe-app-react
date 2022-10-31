import NavStyle from "./Navbar.styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavStyle justify="space-between" wrap="wrap">
      <div>
        <i>{"<Gurme/>"}</i>
        <span>Recipe</span>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="register">Register</Link>
        <Link to="login">Logut</Link>
        <Link to="">Register</Link>
      </div>
    </NavStyle>
  );
};

export default Navbar;
