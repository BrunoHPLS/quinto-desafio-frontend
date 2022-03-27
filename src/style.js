import styled from 'styled-components';

export const AppContainer = styled.div`
    position: relative;
    max-width: 1000px;
    padding: 4.5rem;
    border-radius: 10px;
    background-color: #717786;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);

    &::before{
        position: absolute;
        font-size: 2rem;
        content: "Gerenciador de Transferências";
        top: -2.5rem;
        left: 50%;
        transform: translateX(-50%);
        color: #343d52;
    }
`;
