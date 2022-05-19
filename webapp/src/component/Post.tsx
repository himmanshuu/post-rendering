import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Comment from "./Comment";
import "./Post.css";
import { convertDate } from "../Utlis/dateUtlis";

const Post = ({ post }) => {
  return (
    <div className="card">
      <div className="card__header">
        <img
          className="card__image"
          src={post.user.profile.picture}
          alt="no.png"
        ></img>
        <span className="header__title">{post.user.profile.name}</span>
        <span className="header__date">{convertDate(post.createdAt)}</span>
      </div>
      <p className="card__description">{post.content}</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon icon={"thumbs-up"} className="card__icon__thumbs_up" />
        <span className="card__span__icon">{post.counts.upvotes}</span>
        <FontAwesomeIcon
          icon={"thumbs-down"}
          className="card__icon__thumbs_down"
        />
        <span className="card__span__icon">{post.counts.downvotes}</span>
        <FontAwesomeIcon icon={"eye"} className="card__icon__eye" />
        <span className="card__span__icon">{post.counts.views}</span>
        <FontAwesomeIcon icon={"bookmark"} className="card__icon__eye" />
        <span className="card__span__icon">{post.counts.bookmarks}</span>
      </div>
      <Comment comments={post.comments} />
    </div>
  );
};

export default Post;
