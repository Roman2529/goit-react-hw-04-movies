import React, { Component } from 'react';
import getApi from '../services/getApi.js';

class Review extends Component {
    state = {
        review: [],
    };

    componentDidMount() {
        getApi.getMovieReview(this.props.match.params.id)
            .then((res) => this.setState({ review: res.data.results }));
    }

    render() {
        const { review } = this.state;
        return (
          <>
            {review.length > 0 ? (
              review.map(rev => (
                <li key={rev.id}>
                  <p>{rev.author}</p>
                  <p>{rev.content}</p>
                </li>
              ))
            ) : (
              <p>No review</p>
            )}
          </>
        );
    }
}

export default Review;