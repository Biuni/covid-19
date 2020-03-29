import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class LikeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      like: this.props.like,
      disabled: false
    }
    this.handleLike = this.handleLike.bind(this)
  }

  handleLike() {
    fetch(`https://api.covid-19-coronavirus.tools/like/`, {
      method: 'POST',
      body: JSON.stringify({
        id: this.props.id,
        like: this.state.like,
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    .then(response => response.json())
    .then(res => this.setState({
      like: res.like,
      disabled: true
    }))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <button className="CardVoting" onClick={this.handleLike} onKeyPress={this.handleLike} disabled={this.state.disabled}>
        <FontAwesomeIcon icon={faThumbsUp} size="sm" /> {this.state.like}
      </button>
    )
  }
}

export default LikeButton;
