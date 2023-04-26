import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';


export default function Navbar(props) {

    // const handleMode = ()=>{

    // }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">{props.navTitle}</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" to="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" to="/about">About</a>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-secondary" type="submit">Search</button>
                    </form>
                    <Form>
                    <Form.Check
                        type="switch"
                        className={`mx-2 text-${props.mode === "light" ? "dark" : "light"}`}
                        id="custom-switch"
                        label={`${props.mode === "light" ? "Dark" : "Light"} Mode`}
                        onClick={props.toggleMode}
                    />
                </Form>
                </div>
            </div>
        </nav>
    )
}

//used to check data type of props if it is as declared in propTypes
Navbar.propTypes = {
    navTitle: PropTypes.string,
    aboutText: PropTypes.string
}

//used to give props default values in case we are not receiving them
Navbar.defaultProps = {
    navTitle: "df props",
    aboutText: "df props"
}