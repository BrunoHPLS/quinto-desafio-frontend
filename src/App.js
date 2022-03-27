import './ResetStyle.css';
import './GlobalStyle.css';
import * as style from './style';
import FormularioPesquisa from './components/formularioPesquisa';
import CampoInput from './components/campoDeInput';


function App() {
  return (
    <style.AppContainer>
      <FormularioPesquisa>
        <CampoInput id="Data de Inicio" type="date"/>
        <CampoInput id="Data de Fim" type="date"/>
        <CampoInput id="Nome operador transação" placeholder="ex: Ronaldo"/>
        <CampoInput id="ID usuário" placeholder="ex: 2"/>
      </FormularioPesquisa>
    </style.AppContainer>
  );
}

export default App;
