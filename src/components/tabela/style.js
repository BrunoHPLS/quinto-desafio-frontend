import styled from 'styled-components';


export const TableContainer = styled.table`
  align-self: center;
  border-radius: 0.5rem;
  background-color: #F0F0F0;
  width: 80%;

  font-size: 1.25rem;
`;

export const TableColumn = styled.th`
    white-space: nowrap;
    padding: 0.5rem;
    font-size: 1.45rem;
`

export const TableBody = styled.tbody`
    background-color: #FFF;
`;

export const NoDataMsg = styled.p`
    text-align: center;
    padding: 0.5rem;

    &::before{
        content: "Não há valores";
    }
`;

export const BodyTr = styled.tr`
    font-size: 1rem;

    &:nth-child(even){
        background-color: #FFFFFF;
    }
`;

export const TableCell = styled.td`
    text-align: center;
`;

export const TableBtn = styled.button`
    white-space: nowrap;
    cursor: pointer;

    background-color: #8f8f8f;
    margin: 0.5rem 2rem;
    padding: 0.5rem 1rem; 
    border-radius: 0.5rem;
`;
