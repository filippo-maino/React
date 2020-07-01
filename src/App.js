import React from 'react';
import MovieList from './components/MovieList'
const APIKEY = '42c2b0ab';
const APIURL = 'http://www.omdbapi.com/';



function fetchMovies(search = 'home') {
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
        fetchMovies().then((res) => {
            this.setState({
                movies: res.Search,
                totalMovies: res.totalResults
            })
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-8 offset-2 text-center">
                        <h1>I miei film preferiti</h1>
                        <MovieList movies={this.state.movies}></MovieList>
                    </div>
                </div>


            </div>
        )
    }
}

export default App;