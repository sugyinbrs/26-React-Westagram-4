import React from 'react';
import './Common.scss';

class Comment extends React.Component {
  render() {
    const { commentText } = this.props;
    return (
      <li>
        <span className="commentName">irreplaceavle</span>
        <span className="commentBody">{commentText}</span>
      </li>
    );
  }
}

export default Comment;
