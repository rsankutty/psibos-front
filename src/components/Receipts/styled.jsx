import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  min-height: 200px;
  max-height: 400px;
  width: 100%;
  max-width: 900px;
  margin-bottom: 30px;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 900px;
  background-color: black;
  h1 {
    color: white;
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    margin-bottom: 15px;
  }
`;

export const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  min-width: 350px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #453F3D;
  h1 {
    color: white;
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    margin-bottom: 15px;
  }
`;

export const SessionTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  button{
    width: 30px;
    height: 30px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  h1 {
    color: white;
    font-family: "Saira Stencil One", cursive;
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #2A2727;
  h1 {
    color: white;
    font-family: "Saira Stencil One", cursive;
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #878787;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  button{
    margin-bottom: 30px;
  }
`;
