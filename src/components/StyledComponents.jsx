import styled from "styled-components";

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: darkblue;
  }
`;

function StyledComponentsExample() {
  return <Button>Click Me</Button>;
}
export default StyledComponentsExample;
