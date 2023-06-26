import {
  Container,
  SessionContainer,
  SummaryContainer,
  InfoContainer,
  NameContainer,
  ButtonsContainer,
  SessionTitle,
} from "./styled";
import SessionCard from "../Sessions/Sessions";
import { useState, useEffect } from "react";
import "../../utils";
import generatePDF from "../../utils";
import axios from "axios";

export default function ReceiptCard({
  pacientId,
  name,
  cpf,
  payerName,
  payerCpf,
  getPacientsList,
}) {
  const [date, setDate] = useState("");
  const [totalIncome, setTotalIncome] = useState(0);
  const [sessions, setSessions] = useState(1);
  const [forms, setForms] = useState([]);

  const URL = `${
    import.meta.env.VITE_APP_API_URL
  }/pacients/delete/${pacientId}`;
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    let sum = 0;
    for (let form of forms) {
      sum += Number(form.value);
    }
    setTotalIncome(sum);
  }, [forms]);

  const deleteRegister = () => {
    const promise = axios.post(URL, {}, config);
    promise.then((res) => {
      console.log(res.data);
      getPacientsList();
    });
    promise.catch((err) => alert(err.response.data.message));
  };

  const addSession = () => {
    setSessions(sessions + 1);
  };
  const removeSession = () => {
    if (sessions === 1) return;
    setSessions(sessions - 1);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  return (
    <Container>
      <NameContainer>
        <h1>{name}</h1>
      </NameContainer>
      <SummaryContainer>
        <InfoContainer>
          <h1>Data do Pagameto</h1>
          <input type="date" value={date} onChange={handleDate}></input>
        </InfoContainer>
        <InfoContainer>
          <h1>Total Recebido</h1>
          <h1>{totalIncome}</h1>
        </InfoContainer>
      </SummaryContainer>
      <SessionContainer>
        <SessionTitle>
          <h1>Sessões</h1>
          <div>
            <button onClick={addSession}>+</button>
            <button onClick={removeSession}>-</button>
          </div>
        </SessionTitle>
        {Array.from({ length: sessions }, (_, index) => (
          <SessionCard
            key={index}
            forms={forms}
            setForms={setForms}
          ></SessionCard>
        ))}
      </SessionContainer>
      <ButtonsContainer>
        <button onClick={deleteRegister}>delete</button>
        <button
          onClick={() =>
            generatePDF(
              name,
              cpf,
              payerName,
              payerCpf,
              totalIncome,
              forms,
              date
            )
          }
        >
          Gerar recibo
        </button>
      </ButtonsContainer>
    </Container>
  );
}
