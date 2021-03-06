import React from 'react';
import PropTypes from 'prop-types';

import Test from './test';

export default class Navbar extends React.Component {
  render(){
    return (
      <div className="border-blue">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand ml-sm-2 mr-sm-2" href="/">
            <img src="images/kulu_logo_160.png" width="160" height="36" className="d-inline-block align-top" alt="logo"/>
          </a>
          <div className="dropdown ml-sm-4 dropdown-margin">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Recursos
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Libros</a>
              <a className="dropdown-item" href="#">Contenido Multimedia</a>
              <a className="dropdown-item" href="#">Blog</a>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="col">
              <form className="form-inline">
                <input className="form-control ml-sm-4 mr-sm-2 col-sm-9" type="text" placeholder="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0 col-sm-2" type="submit">Search</button>
              </form>
            </div>
            <div className="col">
              <ul className="nav nav-pills justify-content-end">
                <li className="nav-item">
                  <a className="nav-link" href="#">K'ulu' PRO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#myModal" data-toggle="modal">Iniciar Sesión</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/signup">Regístrarse</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Test/>
      </div>
    );
  }
}
