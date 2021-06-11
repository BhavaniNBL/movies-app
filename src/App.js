import React from 'react';
import Movie from './components/Movies';
import {Searchbar} from './components/Searchbar';
// import Moviesjson from '../public/json/movies.json';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      movies: [],
      searchField: ''
    }
  }
  componentDidMount() {
    axios.get('./json/movies.json')
      .then(response => response.data)
      .then(resp => this.setState({movies: resp}));
    
  }
  handleChange = e => {
    this.setState({ searchField : e.target.value })
  }
  render() {
    const { movies, searchField } = this.state;
    const filteredMovies = movies.filter(movie => 
      movie.title.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
    {/* {movies.map((movie)=> <Movie key={movie.id} {...movie}/>)} */}
    {/* {movies.map((movie)=> console.log(movies))} */}
    <h1>Movies</h1>
    <Searchbar placeholder='search monster movies' 
          handleChange={this.handleChange}/>
    <Movie movies={filteredMovies} />
    </div>
  );
  }
}

export default App;
