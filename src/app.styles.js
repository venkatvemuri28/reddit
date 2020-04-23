import styled from 'styled-components';

export const Headers = styled.div`
  display: flex;
  background: lightblue;
  margin: 0px 10px;
  height: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin: 0px 5px;
  font-size: 12px;
  background: ${({ currenTab, value }) =>
    value === currenTab ? 'blue' : 'white'};
  color: ${({ currenTab, value }) => (value !== currenTab ? 'blue' : 'white')};
`;

export const BackButton = styled.button`
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  margin: 0px 5px;
  font-size: 12px;
  background: #888;
  color: white;
`;

export const Search = styled.input`
  width: 200px;
  font-size: 16px;
`;
