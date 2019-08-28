import React,  { useState, useEffect } from 'react';
import { csv } from 'd3';
import Header from './components/header';
import data from './dataset/data.csv';
import Tabletop from 'tabletop';


function App() {

  const [list, setList] = useState([]);
  const [table, setTable] = useState([]);

  useEffect(() => {
    csv(data).then(function(data) {
      setList(data);
    });
  }, []);

  /*Tabletop.init({
    key: '1A7A6ldY5JXmvSeCMVJrRlxcoF8LbPVDemwbrpCAj5ck',
    callback: googleData => {
      console.log('google sheet data --->', googleData)
    },
    simpleSheet: true
  })*/


  return (
    <div className="App">
      <Header />
      <div className="table-responsive">
      <table className="table table-bordered table-hover ">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Especialidade</th>
          <th scope="col">Idiomas</th>
          <th scope="col">Bairro</th>
          <th scope="col">Recomendação</th>
          <th scope="col">Contato</th>
        </tr>
        </thead>
        <tbody>

      {list.map((element, index) =>

        <tr key={index}>
          <th scope="row">{index +1}</th>
          <td>{element.Nome}</td>
          <td>{element.Especialidade}</td>
          <td>{element.Idiomas}</td>
          <td>{element.Bairro}</td>
          <td>{element.Recomendação}</td>
          <td>{element.Contato}</td>
        </tr>
      )}


        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
