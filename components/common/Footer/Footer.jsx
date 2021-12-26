import cn from "classnames";
import { Container } from "@components/ui";
import s from "./Footer.module.css";


const Footer = ({ className }) => {
  const rootClassName = cn(s.root, className);

  return (
    <footer className={rootClassName}>
      <Container>
      </Container>
    </footer>
  );
};

export default Footer;
