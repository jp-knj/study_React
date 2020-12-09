import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail personWhowritethis="Kenji" timeAgo="Today at 2:00" />
            <CommentDetail personWhowritethis="Naoki" timeAgo="Today at 4:00" />
            <CommentDetail personWhowritethis="Tatuya" timeAgo="Today at 6:00" />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));

