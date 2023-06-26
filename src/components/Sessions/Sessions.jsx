import { Container, StyledForm, StyledInput } from "./styled";
import { useState } from "react";

export default function SessionCard({ forms, setForms }) {
  const [form, setForm] = useState({ date: "", value: "" });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setForms([...forms, form]);
  }

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          name="date"
          placeholder="Data"
          type="date"
          required
          value={form.date}
          onChange={handleForm}
        />
        <StyledInput
          name="value"
          placeholder="Valor"
          type="value"
          required
          value={form.value}
          onChange={handleForm}
        />
        <button type="submit">ok</button>
      </StyledForm>
    </Container>
  );
}
