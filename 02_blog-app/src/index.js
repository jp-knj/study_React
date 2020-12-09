import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning</h4>
                    Are you sure you want to do this !
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail personWhowritethis="Kenji" timeAgo="Today at 2:00" content="Nice blog Post"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail personWhowritethis="Naoki" timeAgo="Today at 4:00" content="I like the subjects"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail personWhowritethis="Tatuya" timeAgo="Today at 6:00" content="What's do you think ?"/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));

