import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {MovieList} from './components/MovieList'; //non ho utilizzato export default
// export default quando esporto solo una funzione o classe
//import {Navbar} from './components/Navbar';
import NavBar2 from './components/NavBar2';
import './navBar2.css';
const APIKEY = '42c2b0ab';
const APIURL = 'http://www.omdbapi.com/';




function fetchMovies(search) {
    return fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then((res) => res.json());
}

const routes = [{to:'/', label :'home'},{to:'/chisiamo', label :'chisiamo'},{to:'/contattaci', label :'contattaci'}];
const dropdown = [];
const config ={ 
    routes : routes,
    dropdown : dropdown,
    search : true,
    logo : {src:"https://via.placeholder.com/15/15",alt:""}
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            totalMovies: 0
        }
    }

    componentDidMount() {
        this.searchMovie("home");
    }

    searchMovie = (termineRicerca) => {
        if (termineRicerca.length<3){
            return;
        }
        fetchMovies(termineRicerca).then((res) => {
            this.setState({ //se utilizzassi this.state.movies = non avrei la renderizzazione
                movies: res.Search,
                totalMovies: res.totalResults
            })
        });
    }

    render() {
        return (
            /*Sto passando a Navbar la prop onsearch a cui passo la funzione searchMovie*/
            <>
            <NavBar2 config = {config} onsearch={this.searchMovie} ></NavBar2>
            <div className="container-fluid m-4">
                <div className="row mt-4">
                    <div className="col-8 offset-2 text-center">
                        <h1>I miei film preferiti</h1>
                        <MovieList movies={this.state.movies}></MovieList>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default App;