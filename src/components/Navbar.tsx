import { NavLink } from "react-router-dom";
import { styled } from "@mui/material";

/* TODO:
  style navbar
  add search and cart icons?

*/

const NavContainer = styled("header")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  gap: 1rem;
  color: ${(props) => props.theme.palette.primary.main};
  font-family: 'Poppins', sans-serif;
  padding: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: ${(props) => props.theme.palette.gray.white};
`;

const NavLinksContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 1rem;
`;
const Logo = styled(NavLink)`
  font-size: 4rem;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.main};
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.main};
`

function Navbar() {

  return (
    <>
      <NavContainer>
        <NavLinksContainer>
          <StyledNavLink to={"/collection"}>collection</StyledNavLink>
          <StyledNavLink to={"/clothing"}>clothing</StyledNavLink>
          <StyledNavLink to={"/electronics"}>electronics</StyledNavLink>
        </NavLinksContainer>
        <Logo to={"/home"}>SOLID</Logo>
        <NavLinksContainer>
          <StyledNavLink to={"/search"}>search</StyledNavLink>
          <StyledNavLink to={"/cart"}>cart</StyledNavLink>
        </NavLinksContainer>
      </NavContainer>
    </>
  );
}

export default Navbar;
