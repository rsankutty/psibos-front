import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100%;
  width: 300px;
  `;

export const StyledLink = styled(Link)`
  font-size: 30px;
  line-height: 17px;
  font-weight: 700;
  text-decoration: none;
  color: white;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 50px;
`