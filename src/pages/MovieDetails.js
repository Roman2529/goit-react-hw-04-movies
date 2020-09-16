import React, { Component } from 'react';
import getApi from '../services/getApi.js';
import { Link, withRouter } from 'react-router-dom';
import { scryRenderedDOMComponentsWithClass } from 'react-dom/test-utils';
import styles from './pages.module.css';

class MovieDetails extends Component {
  state = {
    id: this.props?.match.params?.id,
    movieInfo: {},
  };

  componentDidMount() {
    getApi
      .getMovieDetails(this.state.id)
      .then(res => this.setState({ movieInfo: { ...res.data } }));
  }
  btnGoBack = () => {
    const { history, location } = this.props;
    if (location.state?.from) {
      history.push(location.state.from);
      return;
    }

    history.push(`?query=${location.state.from}`);
  };

  render() {
    const {
      original_title,
      vote_count,
      popularity,
      overview,
      poster_path,
    } = this.state.movieInfo;
    return (
      <>
        <button type="button" onClick={this.btnGoBack}>
          Go back
        </button>
        <div className={styles.itemSearch}>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="/"
              width="200"
            />
          )}
          <h3>{original_title}</h3>
          <p>popularity: {popularity}</p>
          <p>vote-count: {vote_count}</p>
          <h4>Overview</h4>
          <p>{overview}</p>
        </div>
        <div>
          <ul>
            <li>
              <Link
                to={{
                  pathname: `${this.props.match.url}/actors`,
                  state: { from: this.props.location.state?.from },
                }}
              >
                Actors
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `${this.props.match.url}/reviews`,
                  state: { from: this.props.location.state?.from },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(MovieDetails);
