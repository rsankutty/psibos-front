import { Container,Wrapper } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import SideBar from "../../components/SideBar/SideBar"
import RegisterCard from "../../components/Register/Register"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"

export default function RegisterPage() {

  return (
      <Container>
        <SideBar></SideBar>
        <Wrapper>
          <RegisterCard></RegisterCard>
        </Wrapper>
        
      </Container>
  )
}