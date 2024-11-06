import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #313131;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  gap: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;

  border: 4px solid #3a3a3a;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
`;

export const Row = styled.div`
  gap: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
