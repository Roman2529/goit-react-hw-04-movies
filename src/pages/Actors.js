import React, { Component } from 'react';
import getApi from '../services/getApi.js';
import styles from './pages.module.css';

class Actors extends Component {
  state = {
    actors: [],
  };

  componentDidMount() {
    getApi
      .getMovieActors(this.props.match.params.id)
      .then(res => this.setState({ actors: res.data.cast}));
    }
    render() {
        const { actors } = this.state;
        return (
          <div className={styles.itemCast}>
            {actors &&
              actors.map(actor => (
                <li key={actor.id}>
                  {actor.profile_path && (
                    <img
                      width="100"
                      alt={actor.name}
                      src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                    />
                  )}
                  <p>{actor.character}</p>
                  <p>{actor.name}</p>
                </li>
              ))}
          </div>
        );
    }
}

export default Actors;