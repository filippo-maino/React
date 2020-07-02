import React from "react"
import {SearchBar} from "./SearchBar"

export function Navbar({onsearch}){//chiudere sempre i tags nell'html
    return (
        <>
            <nav className="navbar navbar-light bg-light justify-content-between fixed-top">
                <div className="navbar-brand">MyFilm.com <span>copyleft 2020</span> </div>
                    <SearchBar onsearchBar ={onsearch}></SearchBar>
                </nav>
        </>
    )
}