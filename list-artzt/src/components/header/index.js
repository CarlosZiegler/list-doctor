import React from 'react';


const Header = ()=> {

    const handleSubmit = (e) => {
        e.preventDefault();
        // send data from the actual state
    }



   return (
        <div className="jumbotron">
            <h1 className="text-center">List of Doctors</h1>
            {/*<div className="row">
                <form >
                    <div className="form-group">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col"><label>Nome</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Ex: Dra. Nubia Borges "
                                /></th>
                            <th scope="col"><label>Especialidade</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Ex: Clínica Geral"
                                /></th>
                            <th scope="col"><label>Idiomas</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Ex: Alemão, Português"
                                /></th>
                            <th scope="col"><label>Bairro</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Ex: Köpenick"
                                /></th>
                            <th scope="col"><label>Recomendação</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Ex: Ótima terapeuta"
                                /></th>

                            <th scope="col"><label>Contato</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Ex: https://www.hausarztpraxis-berlin.de/"
                                /></th>
                            <th scope="col"> <button className="btn btn-primary"> Salvar
                            </button></th>
                        </tr>
                        </thead>
                    </table>
                    </div>

                </form>
                <p></p>
            </div>*/}
        </div>
    );
}

export default Header;
