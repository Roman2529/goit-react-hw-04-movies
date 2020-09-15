import React, { Component } from 'react';
import getApi from '../services/getApi.js';
import queryString from '../services/queryString.js';
import MovieSearch from '../components/movieSearch/MovieSearch.js';
import styles from './pages.module.css';

class MoviesPage extends Component {
  state = {
    query: '',
    queryMovies: [],
  };
  componentDidMount() {
    const params = queryString(this.props.location.search);
    const { query } = params;
    if (query) {
      getApi
        .searchMovie(query)
        .then(res => this.setState({ queryMovies: res.data.results }));
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    getApi
      .searchMovie(this.state.query)
      .then(res => this.setState({ queryMovies: res.data.results }));
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.query}`,
    });
    this.setState({ query: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    };

    render() {
        const { queryMovies } = this.state;
        return (
          <>
            <form onSubmit={this.handleSubmit} className={styles.searchForm}>
              <label>
                <input
                  type="text"
                  value={this.state.query}
                  name="query"
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Search</button>
            </form>
            <div>
              <ul>
                <MovieSearch movies={queryMovies} />
              </ul>
            </div>
          </>
        );
    }
}

export default MoviesPage;
