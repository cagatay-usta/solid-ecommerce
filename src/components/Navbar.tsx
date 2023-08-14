import { NavLink } from "react-router-dom";
import { styled } from "@mui/material";

/* TODO:
  add navlink styled component
  style navbar
  add search and cart icons

*/

const NavContainer = styled("header")`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 1rem;
  color: ${(props) => props.theme.palette.secondary.main};
`;

const NavLinksContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 1rem;
`;
const Logo = styled("div")``;

function Navbar() {

  return (
    <>
      <NavContainer>
        <NavLinksContainer>
          <div>Collection</div>
          <div>Clothing</div>
          <div>Electronics</div>
        </NavLinksContainer>
        <Logo>SOLID</Logo>
        <NavLinksContainer>
          <div>Search</div>
          <div>Cart</div>
        </NavLinksContainer>
      </NavContainer>
    </>
  );
}

export default Navbar;
