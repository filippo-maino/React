import React from "react"
//import {SearchBar} from "./SearchBar";
import {NavLink} from 'react-router-dom'; 

export function Navbar({onsearch}){//chiudere sempre i tags nell'html
    return (
        <>
            {/* <nav className="navbar navbar-light bg-light justify-content-between fixed-top">
                <div className="navbar-brand">MyFilm.com <span>copyleft 2020</span> </div>
                    <SearchBar onsearchBar ={onsearch}></SearchBar>
                </nav> */}
            <ul>
                {/* con <a href= mi faceva un browser routing
                    con Link non avevo la activeClassName */}
                <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="active" to="serie">Serie Tv</NavLink></li>
            </ul>
        </>
    )
}