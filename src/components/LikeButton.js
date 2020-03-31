import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import https from 'https';

const agent = new https.Agent({
  rejectUnauthorized: false
});

function LikeButton(props) {

  const [data, setData] = useState({
    like: props.like,
    disabled: false
  });

  const handleLike = () => {
    axios({
      method: 'POST',
      url: `https://api.covid-19-coronavirus.tools/like/`,
      data: {
        id: props.id,
        like: data.like,
      },
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      httpsAgent: agent
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
