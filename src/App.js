import React from 'react';
import {MovieList} from './components/MovieList'; //non ho utilizzato export default
// export default quando esporto solo una funzione o classe
import {Navbar} from './components/Navbar';
const APIKEY = '42c2b0ab';
const APIURL = 'http://www.omdbapi.com/';




function fetchMovies(search) {
    return fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search).then((res) => res.json());
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
            <>
            <Navbar onsearch= {this.searchMovie} ></Navbar>
            <div className="container m-4">
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