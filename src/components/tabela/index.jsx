import React,{useState, useRef}from 'react';
import * as style from './style';


function Tabela({elementos,pagination}) {

    const limit=pagination;

    const tableIndex = useRef(0);
    
    const [rows,setRows]=useState(elementos.slice(0,(elementos.length<limit) ? elementos.length:limit));


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
                  <th>Data</th>
                  <th>Valor</th>
                  <th>Tipo</th>
                  <th>Nome Operador Transação</th>
              </tr>
          </thead>
          <style.TableBody>
              {rows.map((element)=>{
                  return (
                      <style.BodyTr key={element.id}>
                          <td align="center">{element.data}</td>
                          <td align="center">{element.valor}</td>
                          <td align="center">{element.tipo}</td>
                          <td align="center">{element.nomeOperador}</td>
                      </style.BodyTr>
                  )
              })}
          </style.TableBody>
          <tfoot>
              <td align="center" onClick={(event)=>{firstPage()}}><button>Primeira pagina</button></td>
              <td align="center" onClick={(event)=>{previousPage()}}><button>Anterior</button></td>
              <td align="center" onClick={(event)=>{nextPage()}}><button>Proximo</button></td>
              <td align="center" onClick={(event)=>{lastPage()}}><button>Ultima pagina</button></td>
            </tfoot>
      </style.TableContainer>
  );
}

export default Tabela;