import React from 'react';
import '../navBar2.css'
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

export default class NavBar2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    
    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light my-nav">
            <img className="navbar-brand" src={this.props.config.logo.src} alt={this.props.config.logo.alt} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            {this.props.config.routes.map((el,index)=>{return (
                <NavLink key={index} exact activeClassName="active" className="nav-link" to={el.to}>{el.label}</NavLink>)})}
                
                </li>
                {/* <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" >Action</NavLink>
                <NavLink className="dropdown-item" >Another action</NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" >Something else here</NavLink>
                </div>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</NavLink>
            </li> */}
            </ul>
            <SearchBar onsearchBar={this.props.onsearch}></SearchBar>
            </div>
            </nav>
            </>
            )
        }
    }
    
    {/* // <nav className="my-nav">
    //     <img src={this.props.config.logo.src} alt={this.props.config.logo.alt}/>
    //     {this.props.config.routes.length > 0?(
    //         <div>
    //         {this.props.config.routes.map((el,index)=>{
    //             return (
    //                 <NavLink key={index} exact activeClassName="active" to={el.to}>{el.label}</NavLink>
    //                 )
    //             })}
    //             {this.props.config.search? <SearchBar onsearch={this.props.onsearch}></SearchBar>:''}
    //         </div>):""
    
    //         }
//         </nav>   */}