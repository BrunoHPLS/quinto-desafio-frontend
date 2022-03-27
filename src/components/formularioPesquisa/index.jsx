import React from 'react';
import * as style from './style';

function FormularioPesquisa(props) {
  return (
  <style.FormContainer>
    {props.children}
    <style.SubmitButton type="submit">Pesquisar</style.SubmitButton>
  </style.FormContainer>
  );
}

export default FormularioPesquisa;