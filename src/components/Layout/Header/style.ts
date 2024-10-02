import styled from "styled-components";
export const Container = styled.header`
  background-color: ${(props) => props.theme.md};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 15px;
  @media (max-width: ${(props) => props.theme.md}) {
    padding: 10px 10px 10px 0;
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

export const ActionButton = styled.button`
  height: 40px;
  overflow: hidden;
  margin-right: 20px;
  gap: 5px;
  border: none;
  color: ${(props) => props.theme.gray};
  background-color: ${(props) => props.theme.background};
`;
