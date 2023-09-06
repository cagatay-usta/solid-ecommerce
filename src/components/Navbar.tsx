import { NavLink } from "react-router-dom";
import { Badge, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

/* TODO:
  add badge functionality 
  add mobile hamburger icon
*/

const NavContainer = styled("header")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 8rem;
  gap: 1rem;
  color: ${(props) => props.theme.palette.primary.main};
  font-family: "Poppins", sans-serif;
  padding: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: ${(props) => props.theme.palette.gray.white};

  position: fixed;
  top: 0;
  margin-bottom: 10rem;

  @media screen and (max-width: 720px) {
    & > div > :not(.icon-container) {
      display: none;
    }
  }
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
  transition: transform 0.3s ease-in-out;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.palette.primary.main};
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  transition: transform ease-in-out;
  position: relative;
  padding-bottom: 3px;
  margin-right: 10px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 1.5rem;
    height: 2px;
    width: 100%;
    transform: scaleX(0);
    background: transparent;
    transition: transform 0.3s ease-in-out, background-color 0.5s ease;
    transform-origin: right;
  }
  &:hover:after {
    transform: scaleX(1);
    background: ${(props) => props.theme.palette.primary.main};
    transform-origin: left;
  }
`;

const CartIconContainer = styled("div")`
  overflow: hidden;
  display: flex;

  svg {
    transition: transform 0.3s ease,
      opacity 0.1s cubic-bezier(0.01, 0.97, 0.96, 0.04);
  }
  svg:last-child {
    transform: translateX(-200%);
    opacity: 0;
  }
  svg:first-child {
    transform: translateX(50%);
  }
  &:hover svg:last-child {
    transform: translateX(-50%);
    opacity: 1;
  }
  &:hover svg:first-child {
    transform: translateX(200%);
    opacity: 0;
  }
`;

type NavbarProps = {
  itemCount: number;
};

function Navbar({ itemCount }: NavbarProps) {
  return (
    <>
      <NavContainer>
        <NavLinksContainer>
          <StyledNavLink to={"/collection"}>collection</StyledNavLink>
          <StyledNavLink to={"/collection/clothing"}>clothing</StyledNavLink>
          <StyledNavLink to={"/electronics"}>electronics</StyledNavLink>
        </NavLinksContainer>
        <Logo to={"/home"}>SOLID</Logo>
        <NavLinksContainer>
          <StyledNavLink to={"/about"}>about</StyledNavLink>
          <StyledNavLink to={"/search"} className="icon-container">
            search
            <SearchIcon />
          </StyledNavLink>
          <StyledNavLink to={"/cart"} className="icon-container">
            <Badge badgeContent={itemCount} color="secondary">
              <CartIconContainer>
                cart
                <ShoppingCartIcon />
                <ShoppingCartCheckoutIcon />
              </CartIconContainer>
            </Badge>
          </StyledNavLink>
        </NavLinksContainer>
      </NavContainer>
    </>
  );
}

export default Navbar;
