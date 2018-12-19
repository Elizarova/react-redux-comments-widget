import React from "react";
import { connect } from "react-redux";
import CommentsForm from "../components/comments-form";
import { handleAuthor, handleComment } from "../actions/form";
import { addComment, getComment, deleteComment } from "../actions/comments";
import CommentList from "../components/comments-list";
import "./App.css";

const App = props => {
  const {
    form,
    handleAuthor,
    handleComment,
    addComment,
    deleteComment,
    comments
  } = props;
  return (
    <div className="App">
      <CommentsForm
        author={form.author}
        comment={form.comment}
        handleAuthor={handleAuthor}
        handleComment={handleComment}
        addComment={addComment}
        deleteComment={deleteComment}
      />
      <CommentList commentList={comments} deleteComment={deleteComment} />
    </div>
  );
};

// приклеиваем данные из store
const mapStateToProps = store => {
  console.log(store); // посмотрим, что же у нас в store?
  return {
    form: store.form,
    comments: store.comments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleAuthor: ev => dispatch(handleAuthor(ev)),
    handleComment: ev => dispatch(handleComment(ev)),
    addComment: comment => dispatch(addComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    getComment: () => dispatch(getComment())
  };
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
