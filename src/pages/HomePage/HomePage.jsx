
import { Container } from "./styled"
import SideBar  from "../../components/SideBar/SideBar"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"

export default function HomePage() {
    return (
        <Container>
            <SideBar></SideBar>
            <h1>PSIBOS</h1>
        </Container>
    )
}