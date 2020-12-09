import React from 'react';

const CommentDetail = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src='https://source.unsplash.com/random' />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.personWhowritethis}
                </a>
                <div className="metadata">
                    <span className="date"> {props.timeAgo} </span>
                </div>
                <div className="text">Nice Blog Post!</div>
            </div>
        </div>
    );
};

export default CommentDetail;