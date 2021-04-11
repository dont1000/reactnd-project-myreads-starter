import React from 'react'

class Searchbar extends React.Component {
  state = { text: "" };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
        this.props.handleTextInput(this.state.text);
    }
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search by title or author"
        value={this.state.text}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />
    );
  }
}

export default Searchbar 