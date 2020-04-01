import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function LikeButton(props) {

  const [data, setData] = useState({
    like: props.like,
    disabled: false
  });

  const handleLike = () => {
    axios({
      method: 'POST',
      url: `https://www.biuni.it/covid-19/like/`,
      data: {
        id: props.id,
        like: data.like,
      },
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    .then(res => setData({
      like: res.data.like,
      disabled: true
    }))
    .catch(err => console.log(err))
  };

  return (
    <button className="CardVoting" onClick={handleLike} onKeyPress={handleLike} disabled={data.disabled}>
      <FontAwesomeIcon icon={faThumbsUp} size="sm" /> {data.like}
    </button>
  );
}

export default LikeButton;
