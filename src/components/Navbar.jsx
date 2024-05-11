import { NavLink } from "react-router-dom";
import "../styles/index.css";
export default function Navbar() {
  return (
    <>
      <h1>Website Name</h1>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </>
  );
}
