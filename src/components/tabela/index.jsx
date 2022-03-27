import React,{useState, useRef, useEffect}from 'react';
import * as style from './style';


function Tabela({elementos,pagination}) {

    const limit=pagination;

    const tableIndex = useRef(0);

    useEffect(()=>{
        changePage();
    },[elementos]);
    
    const [rows,setRows]=useState([]);


    const changePage = () =>{
        setRows(elementos.slice(tableIndex.current, limit + tableIndex.current));
    }

    const firstPage = () => {
        tableIndex.current=0;
        changePage();
    }

    const previousPage = () =>{
        tableIndex.current+=(tableIndex.current===0) ? 0:-limit;
        changePage();
    };

    const nextPage = () => {
        tableIndex.current += ((tableIndex.current+limit) >= elementos.length) ? 0:limit;
        changePage();
    };

    const lastPage = () =>{
        tableIndex.current= limit*Math.trunc(
            (elementos.length%limit)===0 ? elementos.length/limit - 1:elementos.length/limit
        );
        changePage();
    }


  return (
      <style.TableContainer>
          <thead>
              <tr>
                  <style.TableColumn>Data</style.TableColumn>
                  <style.TableColumn>Valor</style.TableColumn>
                  <style.TableColumn>Tipo</style.TableColumn>
                  <style.TableColumn>Nome Operador Transação</style.TableColumn>
              </tr>
          </thead>
          <style.TableBody>
              {rows.length > 0 ? rows.map((element)=>{
                  return (
                      <style.BodyTr key={element.id}>
                          <style.TableCell>{element.dataTransferencia.substring(0,10)}</style.TableCell>
                          <style.TableCell>{element.valor}</style.TableCell>
                          <style.TableCell>{element.tipo}</style.TableCell>
                          <style.TableCell>{element.nomeOperadorTransacao ? element.nomeOperadorTransacao:"null"}</style.TableCell>
                      </style.BodyTr>
                  )
              }):<tr><td colSpan="4"><style.NoDataMsg/></td></tr>}
          </style.TableBody>
          <tfoot>
                <tr>
                    <td><style.TableBtn onClick={(event)=>{firstPage()}}>Primeira pagina</style.TableBtn></td>
                    <td><style.TableBtn onClick={(event)=>{previousPage()}}>Anterior</style.TableBtn></td>
                    <td><style.TableBtn onClick={(event)=>{nextPage()}}>Proximo</style.TableBtn></td>
                    <td><style.TableBtn onClick={(event)=>{lastPage()}}>Ultima pagina</style.TableBtn></td>
                </tr>
           </tfoot>
      </style.TableContainer>
  );
}

export default Tabela;