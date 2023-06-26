import { Container, Wrapper } from "./styled";
import SideBar from "../../components/SideBar/SideBar";
import ReceiptCard from "../../components/Receipts/Receipts";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [pacients, setPacients] = useState([]);

  const URL = `${import.meta.env.VITE_APP_API_URL}/pacients`;
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function getPacientsList() {
    const promise = axios.get(URL, config);

    promise.then((res) => {
      setPacients(res.data);
    });
    promise.catch((err) => alert(err.response.data.message));
}

  useEffect(getPacientsList,[])

  return (
    <Container>
      <SideBar></SideBar>
      <Wrapper>
        {pacients.length === 0 ? (
          <h1>Nenhum paciente registrado!</h1>
        ) : (
          pacients.map((p) => (
            <ReceiptCard
              key={p.id}
              pacientId={p.id}
              name={p.name}
              cpf={p.cpf}
              payerName={p.payer_name}
              paryerCpf={p.paryer_cpf}
              getPacientsList={getPacientsList}
            />
          ))
        )}
      </Wrapper>
    </Container>
  );
}
