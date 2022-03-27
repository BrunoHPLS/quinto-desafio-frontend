import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 4rem;
  row-gap: 2rem;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  background-color: blue;
  font-size: 1.25rem;
  align-self: flex-end;
  padding: 0.75rem 5rem;
  border-radius: 0.5rem;
`;