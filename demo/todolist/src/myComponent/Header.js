import React from 'react'
import PropTypes from 'prop-types'
import * as FaIcon from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                        <li className="nav-item">
                            <a><FaIcon.FaChrome />&nbsp;</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-4 mb-lg-0">
                        <li className="nav-item">
                            <a>Todo List</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex justify--content-end">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        &nbsp;&nbsp;
                        <li className="nav-item">
                            <Link to="/about">About</Link>
                        </li>
                        &nbsp;&nbsp;
                        <li className="nav-item">
                            <Link to="#">Contact Us</Link>
                        </li>
                        &nbsp;&nbsp;
                        <li className="nav-item">
                            <Link to="#">Link</Link>
                        </li>
                    </ul>
                    {props.searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> : " "}
                </div>
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}