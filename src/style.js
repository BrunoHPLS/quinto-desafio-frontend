import styled from 'styled-components';

export const AppContainer = styled.div`
    position: relative;
    max-width: 1000px;
    padding: 4.5rem;
    border-radius: 10px;
    background-color: red;

    display: flex;
    flex-direction: column;

    &::before{
        position: absolute;
        font-size: 2rem;
        content: "Gerenciador de Transferências";
        top: -2rem;
        left: 50%;
        transform: translateX(-50%);
    }
`;
