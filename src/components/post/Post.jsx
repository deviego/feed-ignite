import { Avatar } from "../avatar/Avatar";
import { Comment } from "../comment/Comment";
import {} from 'date-fns'
import style from "./Post.module.css";

export const Post = ({author, publishedAt, }) => {
  const publishedDateFormatted = format(publishedAt, "'dd 'de' LLLL 'às' HH:mm 'h'")
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
        <time title="11 de fevereiro as 08:30" dateTime="2023-02-11">
          {" "}
        {publishedDateFormatted}
        </time>
      </header>

      <div className={style.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto {""}</a>
          <a href="#">#nlw {""}</a>
          <a href="#"> #rocketseat</a>
        </p>
      </div>

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário"/>
        <footer>
          <button type="submit">Comentar</button>
        </footer>
        
      </form>

      <div className={style.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
};
