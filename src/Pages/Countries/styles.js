import styled from "styled-components";

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding: 20px;
`;

export const InputField = styled.div`
  width: 400px;
  padding: 5px 20px;
  border-radius: 5px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Dark-Blue);
`;

export const Input = styled.input`
  font-family: "Nunito", sans-serif;
  width: 100%;
  margin-left: 10px;
  font-size: 12px;
  color: var(--White);
  padding: 10px 5px;
  border: none;

  &::placeholder {
    color: var(--White);
    opacity: 0.7;
  }
`;

export const CountrysContainer = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 60px;
`;
