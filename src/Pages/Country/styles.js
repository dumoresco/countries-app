import styled from "styled-components";

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const Button = styled.button`
  margin-top: 50px;
  width: 120px;
  height: 40px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--White);
  background-color: var(--Dark-Blue);

  .icon {
    margin-right: 10px;
  }
`;

export const Details = styled.div`
  margin-top: 50px;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 825px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  width: 100%;
  margin-left: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    color: white;
    margin-bottom: 50px;
  }
`;
export const ItemGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--White);
`;
export const Item = styled.p`
  display: flex;
  flex: 1;
  align-items: flex-start;
  margin-top: 10px;

  span {
    opacity: 0.5;
    padding-left: 10px;
  }
`;
