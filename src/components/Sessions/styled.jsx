import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;

export const StyledForm = styled.form`
  display: flex;
  width: 350px;
  max-width: 100%;
  align-items: center;
  justify-content: center;
`

export const StyledInput = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-size: 14px;
  line-height: 14px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};

  &::placeholder{
    color: gray;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
  }
`