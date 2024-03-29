import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    const handleMode = ()=>{

    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">{props.navTitle}</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-secondary" type="submit">Search</button>
                    </form> */}
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-1" style={{height:"20px",width:"20px",cursor:"pointer"}} onClick={()=>{props.toggleMode("primary")}}></div>
                        <div className="bg-danger rounded mx-1" style={{height:"20px",width:"20px",cursor:"pointer"}} onClick={()=>{props.toggleMode("danger")}}></div>
                        <div className="bg-success rounded mx-1" style={{height:"20px",width:"20px",cursor:"pointer"}} onClick={()=>{props.toggleMode("success")}}></div>
                        <div className="bg-warning rounded mx-2" style={{height:"20px",width:"20px",cursor:"pointer"}} onClick={()=>{props.toggleMode("warning")}}></div>
                    </div>

                    <Form>
                    <Form.Check
                        type="switch"
                        className={`mx-2 text-${props.mode === "light" ? "dark" : "light"}`}
                        id="custom-switch"
                        label={`${props.mode === "light" ? "Dark" : "Light"} Mode`}
                        onClick={()=>{props.toggleMode()}}
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