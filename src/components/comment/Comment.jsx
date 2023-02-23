import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../avatar/Avatar";

import style from "./Comment.module.css";

export const Comment = () => {
  return (
    <div className={style.comment}>
      <Avatar hasBorder={false} src="https://github.com/deviego.png" alt="" />
      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Deviego</strong>
              <time title="11 de fevereiro as 08:30" dateTime="2023-02-11">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Deviego!!</p>
        </div>

        
        <footer>
          <button>
            <ThumbsUp />
            aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
