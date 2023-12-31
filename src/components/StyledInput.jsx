import styled from "styled-components"

const StyledInput = styled.input`
  width: 100%;
  height: 55px;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};

  &::placeholder{
    color: gray;
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
  }
`

export default StyledInput