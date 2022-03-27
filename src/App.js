import './ResetStyle.css';
import './GlobalStyle.css';
import * as style from './style';
import FormularioPesquisa from './components/formularioPesquisa';
import CampoInput from './components/campoDeInput';
import Tabela from './components/tabela';


function App() {
  return (
    <style.AppContainer>
      <FormularioPesquisa>
        <CampoInput id="Data de Inicio" type="date" placeholder="2001-08-29"/>
        <CampoInput id="Data de Fim" type="date"/>
        <CampoInput id="Nome operador transação" placeholder="ex: Ronaldo"/>
        <CampoInput id="ID usuário" placeholder="ex: 2"/>
      </FormularioPesquisa>
      <Tabela elementos={[{data:'29/08/2001',valor:'300,00',tipo:'SAQUE',nomeOperador:''},{data:'29/08/2001',valor:'300,00',tipo:'SAQUE',nomeOperador:''}]} pagination="5"/>
    </style.AppContainer>
  );
}

export default App;
