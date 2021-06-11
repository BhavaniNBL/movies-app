import React from 'react';
import {Moviecontainer} from './Moviecontainer';
import './Movies.style.css';

const Movie = (props) => (
    <div className="card-list">
    {props.movies.map(movie => (
        // <h1 key={monster.id}>{monster.name}</h1>
        <Moviecontainer key={movie.id} {...movie}></Moviecontainer>
        ))}
    </div>
)

export default Movie;