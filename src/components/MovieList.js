import React from 'react';
import MovieItem from './MovieItem';
//serve semplicemente per inscatolare quello che avevamo già fatto

export function MovieList(props){
    if (!props.movies) {
        return null;
    }
    return(
        <div className="row">
            {
                 props.movies.map((movie)=>{                    
                    return <MovieItem key = {movie.imdbID} movie = {movie}></MovieItem>
                    })
            }
        </div>
    )}
export default MovieList;
