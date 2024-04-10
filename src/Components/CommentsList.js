import React from 'react'
import Comment from './Comment';

const CommentsList = ({ comments }) => {
    return comments && comments.map((val, index) =>
        <div key={index} className='w-100'>
            <Comment comment={val} />
            <div className='ps-4 ms-3 border-start'>
                <CommentsList comments={val.replies} />
            </div>
        </div>
    );
}

export default CommentsList;
