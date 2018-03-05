import React from 'react';

export default class MovieReviews extends React.Component {
  constructor() {
    super();

    this.props = {
      reviews: []
    };
  }

  render() {
    return (
      <div className = "review-list">
        {reviews.map(review =>
          <div className="review">
            <h2>Title: {review.display_title}</h2>
            <p>Headline: {review.headline}</p>
            <p>Opens: {review.opening_day}</p>
        </div>
      </div>
    )
  }
};
