import React, { Component } from 'react';

export default class SearchBar extends Component {
  //Component State set up
  constructor(props) {
    super(props);
    this.state = { term: '' };

    // Binding Context(this) to callback
    // if callback is referes to context(this), you need to bind.
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
  }

  render() {
    return (
      // When Enter is pressed, browser assumes you submitting the form
      // Meaning all html form will be POST on server, and reload the page.
      // So user onSubmit to prevent it (Stop fetching html page all of the time)
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite city"
          className="form-control"
          value={this.state.term}
          onChange={ this.onInputChange } />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
