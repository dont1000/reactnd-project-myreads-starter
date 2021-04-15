import React from 'react'

class Searchbar extends React.Component {
  state = { query: "" };

  handleChange = (query) => {
    this.setState({ query: query });
    this.props.handleInputQuery(query);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search by title or author"
        value={this.state.query}
        onChange={(event) => this.handleChange(event.target.value)}
      />
    );
  }
}

export default Searchbar 