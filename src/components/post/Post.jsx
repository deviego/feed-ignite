import style from "./Post.module.css";

export const Post = () => {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img className={style.avatar} src="https://github.com/deviego.png" />

          <div className={style.authorInfo}>
            <strong>Diego domingues</strong>
            <span> Full-stack Developer</span>
          </div>
        </div>
        <time title="11 de fevereiro as 08:30" dateTime="2023-02-11">
          {" "}
          Publicado a 1h
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
        <button type="submit">Comentar</button>
      </form>
    </article>
  );
};
