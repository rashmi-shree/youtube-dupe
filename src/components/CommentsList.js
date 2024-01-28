import React from 'react'
import Comment from './Comment'
const CommentsList = (props) => {
    const {comments} = props;
    console.log(comments);
  return (
    <div>
        {
            comments.map((comment, index)=>
            (<div key={index}>
                <Comment data={comment} />
                <div className='px-5 pt-1 ml-5 border border-l-black'>
                <CommentsList comments={comment.replies} />   
                </div> 
            </div>)
            )
        }
    </div>
  );
}

export default CommentsList