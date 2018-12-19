import React from "react";

const CommentsForm = props => {
  const { handleAuthor, handleComment, addComment } = props;

  // дата и время комментария
  const getDateComment = () => {
    var m = new Date();
    const date = `${m.getDate()}.${m.getMonth()}.${m.getFullYear()}`;
    const time = `${m.getHours()}:${m.getMinutes()}:${m.getSeconds()}`;
    const dateTime = `${date} ${time}`;

    return dateTime;
  };
  // валидация полей ввода
  const validateInput = str => {
    if (str.match(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi)) {
      return false;
    }
    return true;
  };

  // общая проверка
  const validateComment = ev => {
    ev.preventDefault();
    const authorVal = props.author.trim();
    const commentVal = props.comment.trim();

    // проверяем на заполненность полей автор комментарий
    if (authorVal && commentVal) {
      if (validateInput(props.author) && validateInput(props.comment)) {
        return true;
      } else {
        alert("поля содержат недопустимые символы");
      }
    } else {
      alert("поля является обязательным! вы ввели пустое значение");
    }
  };

  return (
    <form
      name="comments"
      onSubmit={event => {
        // event.preventDefault();
        if (validateComment(event)) {
          addComment({
            id: Date.now(),
            author: props.author,
            comment: props.comment,
            date: getDateComment()
          });
        }
      }}
    >
      <p>
        <input
          type="text"
          name="author"
          placeholder="Ваше имя"
          value={props.author}
          onChange={ev => {
            handleAuthor(ev);
          }}
        />
      </p>
      <p>
        <textarea
          type="text"
          name="text"
          placeholder="Ваш комментарий"
          value={props.comment}
          onChange={ev => {
            handleComment(ev);
          }}
        />
      </p>
      <p>
        <button type="submit">Добавить комментарий</button>
      </p>
    </form>
  );
};
export default CommentsForm;
