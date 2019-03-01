import React from 'react';

import './Author.scss';

export const Author = ({name, avatarURL}) => {
  return (
    <div className="Author">
      <img className="Author__avatar" src={avatarURL} alt={name}/>
      <div className="Author__data">
        <small>Author</small>
        <span>{ name }</span>
      </div>

    </div>
  );
};
