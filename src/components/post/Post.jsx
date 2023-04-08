import { Avatar } from "../avatar/Avatar";
import { Comment } from "../comment/Comment";
import { format, formatDistanceToNow, set } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import style from "./Post.module.css";
import { useState } from "react";

export const Post = ({ author, publishedAt, content }) => {
  const publishedDateFormatted = format(
    publishedAt,
    " dd 'de' LLLL 'às' HH:mm 'h'",
    {
      locale: ptBR,
    }
  );

  const publichedDataRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [newCommentText, setNewCommentText] = useState("");
  const [comment, setComment] = useState([]);

  function handleNewComment() {
    event.preventDefault();

    setComment([...comment, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentText() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentWithoutDeleteOne = comment.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComment(commentWithoutDeleteOne);
  }

  const isCommentInputEmpty = newCommentText.length === 0;
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={author.avatarUrl} />

          <div className={style.authorInfo}>
            <strong>{author.name}</strong>
            <span> {author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {" "}
          {publichedDataRelativeToNow}
        </time>
      </header>

      <div className={style.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleNewComment} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentText}
          required
        />
        <footer>
          <button type="submit" disabled={isCommentInputEmpty}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comment.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};
