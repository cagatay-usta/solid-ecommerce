import { NavLink } from "react-router-dom";
import { styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";

/* TODO:
  add navlink styled component
  style navbar
  add styled component theme??

*/

const NavContainer = styled("header")`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 1rem;
  color: ${(props) => props.color};
`;

const NavLinksContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 1rem;
`;

const Logo = styled("div")``;

function Navbar() {
  const theme = useTheme();

  return (
    <>
      <NavContainer color={theme.palette.primary.main}>
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
