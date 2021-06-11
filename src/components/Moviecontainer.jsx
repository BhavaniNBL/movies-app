import React from 'react';
import './Movies.style.css';

export const Moviecontainer = ({title,id,overview,release_date,genres,poster }) => (
    <div className='card-container'>
        {/* <img alt='monster' src={`https://robohash.org/${id}?set=set2&size=180x180`}></img> */}
        <img className="img-size" alt='monster' src={poster}></img>
       <div className="overview-desc">
       {/* <h2>{title}</h2> */}
           <div><span>Title:</span>{title}</div>
           <div><span>Overview:</span>{overview}</div>
           <div><span>Release Date:</span>{release_date}</div>
           <div><span>Genres:</span>{genres}</div>
           </div>
    </div>
)