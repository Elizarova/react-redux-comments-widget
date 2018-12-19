import React from "react";

const CommentList = props => {
  const { commentList, deleteComment } = props;
  let newsTemplate;
  // console.log(commentList);

  if (commentList.comments.length) {
    newsTemplate = commentList.comments.map(comment => {
      return (
        <li className="articles-list__item" key={comment.id}>
          <p className="commentAuthor">{comment.author}</p>
          <p className="commentDate">{comment.date}</p>
          <p className="commentText">{comment.comment}</p>
          <button
            title="удалить"
            onClick={() => {
              deleteComment(comment.id);
            }}
          >
            delete
          </button>
          <hr />
        </li>
      );
    });
  } else {
    newsTemplate = <p>Комментариев нет</p>;
  }

  return newsTemplate;
};

export default CommentList;
