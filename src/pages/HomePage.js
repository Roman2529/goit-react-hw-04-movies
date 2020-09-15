import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getApi from '../services/getApi.js';
import styles from './pages.module.css';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  componentDidMount() {
    getApi
      .getPopularMovies()
      .then(res => this.setState({ trendingMovies: res.data.results }));
  }

  render() {
    const { trendingMovies } = this.state;
    return (
      <>
        <h1>Trending Movies</h1>
        <ul className={styles.trendingList}>
          {trendingMovies.map(movie => (
            <li key={movie.id} >
              <Link
                id={movie.id}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: this.props.location },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
