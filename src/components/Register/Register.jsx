import { Container } from "./styled";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledButton from "../../components/StyledButton";
import StyledLink from "../../components/StyledLink";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function RegisterCard() {
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    payerName: "",
    payerCpf: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleRegister(e) {
    e.preventDefault();
    setIsLoading(true);

    const URL = `${import.meta.env.VITE_APP_API_URL}/pacients`;
    const body = form;
    const token =  localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await axios.post(URL, body, config);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      alert(err.response.data.message);
    }
  }

  return (
    <Container>
      <StyledForm onSubmit={handleRegister}>
        <StyledInput
          name="name"
          placeholder="Nome"
          type="name"
          required
          disabled={isLoading}
          value={form.name}
          onChange={handleForm}
        />
        <StyledInput
          name="cpf"
          placeholder="cpf"
          type="cpf"
          required
          disabled={isLoading}
          value={form.cpf}
          onChange={handleForm}
        />
        <StyledInput
          name="payerName"
          placeholder="Nome do pagador"
          type="payerName"
          disabled={isLoading}
          value={form.payerName}
          onChange={handleForm}
        />
        <StyledInput
          name="payerCpf"
          placeholder="cpf do pagador"
          type="payerCpf"
          disabled={isLoading}
          value={form.payerCpf}
          onChange={handleForm}
        />
        <StyledButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots width={50} height={50} color="#FFFFFF" />
          ) : (
            "Cadastrar"
          )}
        </StyledButton>
      </StyledForm>
    </Container>
  );
}
