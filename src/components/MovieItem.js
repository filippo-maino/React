import React from 'react';

function MovieItem ({movie}){ //stiamo destrutturando e prendendo solo la prop con chiave movie
    return ( //altrimenti dovrei sempre scrivere props.movie
        <>
        <div className="card col-3">
          <img className="card-img-top img-fluid" alt={movie.Title} src={movie.Poster} ></img>
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Type} {movie.Year}</p>
                        <div className="btn btn-primary">Watch</div>
            </div>
        </div>
</>
    )
}
export default MovieItem;