import NavbarRoot from "./NavbarRoot";
import { Container } from "@components/ui";
import {
  Logo,
  HamburgerMenu,
  Bell,
  Search,
  Contact,
  Cart,
  Cash,
} from "@components/icons";

const Navbar = () => (
  <NavbarRoot>
    <Container>
      <div className="flex justify-between items-center">
        <Logo className="cursor-pointer" />
        <div className="hidden md:flex justify-between items-center space-x-8">
          <Search className="cursor-pointer" />
          <Contact className="cursor-pointer" />
          <Bell className="cursor-pointer" />
          <Cart className="cursor-pointer" />
          <HamburgerMenu className="cursor-pointer" />
          <Cash className="cursor-pointer" value={1023} />
        </div>
        <HamburgerMenu className="cursor-pointer md:hidden" />
      </div>
    </Container>
  </NavbarRoot>
);

export default Navbar;
