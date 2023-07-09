import styled from 'styled-components';

export const List = styled.ul`
    list-style: initial;
    margin-left: 25px;
    display: flex;
    flex-direction: raw;
    gap: 10px;
`;

export const Button = styled.button`
  height: 30px;
  width: 130px;
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  border-radius: 12px;
  border: 1px solid blue;
  transition-duration: 0.4s;

  &:hover {
    background-color: blue;
    color: white;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;
