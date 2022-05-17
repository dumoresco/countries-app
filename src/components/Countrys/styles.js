import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--Dark-Blue);
  border-radius: 5px;

  display: flex;
  align-items: center;
  flex-direction: column;

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.7);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .text-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding: 15px 20px 40px 20px;

    h1,
    p {
      font-size: 14px;
      color: var(--White);
      font-weight: 300;
    }
    h1 {
      font-size: 16px;
      font-weight: 800;
      margin-bottom: 10px;
    }
    p {
      font-weight: 600;
      margin-top: 5px;
    }
    span {
      opacity: 0.7;
      font-weight: 300;
    }
  }
`;
