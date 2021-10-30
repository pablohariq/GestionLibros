import React from "react";
import {Navlink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Aplicación de Gestión de Libros</h1>
            <hr />
            <div className="links">
                <Navlink to="/" className="link" activeClassName="active" exact>
                    Lista de Libros
                </Navlink>
                <Navlink to="/add" className="link" activeClassName="active">
                    Añade Libro
                </Navlink>
            </div>
        </header>
    );
};


export default Header;