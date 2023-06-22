import React, { useState } from "react";
import { Container } from "./styled";
import StyledLink from "../StyledLink";

export default function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <StyledLink to="/register">Cadastro</StyledLink>
      <StyledLink to="/home">Recibos</StyledLink>
    </Container>
  );
}
