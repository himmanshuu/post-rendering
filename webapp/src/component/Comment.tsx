import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import react, { useState } from "react";
import "./Post.css";
const mockComments = [
  {
    _id: "1",
    body: "Hey, thank you for taking an interest in our program. You can go to the Programs tab on the Prodigy Baby app and view the course videos. For enquires please email us to support that is help@raisingsuperstars.in , so that we can assist you further :)",
  },
  {
    _id: "2",
    body: "Hey, thank you for taking an interest in our program. You can go to the Programs tab on the Prodigy Baby app and view the course videos. For enquires please email us to support that is help@raisingsuperstars.in , so that we can assist you further :)",
  },
];
const Comment = ({ comments }) => {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => setIsOpen(!isOpen);
  return (
    <>
      {isOpen && (
        <>
          {comments.map((comment) => {
            return (
              <div key={comment._id} className="comment">
                <div className="comment__header">
                  <img
                    src={comment.user.profile.picture}
                    alt="no.png"
                    className="comment__img"
                  ></img>{" "}
                  <span className="header__title">
                    {comment.user.profile.name}
                  </span>
                </div>
                <p className="comment__description">{comment.body}</p>
                <div className="card__icon__container">
                  <FontAwesomeIcon
                    icon={"thumbs-up"}
                    className="card__icon__thumbs_up"
                  />
                  <span className="card__span__icon">
                    {comment.counts.upvotes}
                  </span>
                  <FontAwesomeIcon
                    icon={"thumbs-down"}
                    className="card__icon__thumbs_down"
                  />
                  <span className="card__span__icon">
                    {comment.counts.downvotes}
                  </span>
                  <FontAwesomeIcon icon={"eye"} className="card__icon__eye" />
                  <span className="card__span__icon">
                    {comment.counts.views}
                  </span>
                  <FontAwesomeIcon
                    icon={"bookmark"}
                    className="card__icon__eye"
                  />
                  <span className="card__span__icon">
                    {comment.counts.bookmarks}
                  </span>
                </div>
              </div>
            );
          })}
        </>
      )}
      <button
        type="button"
        onClick={clickHandler}
        style={{ marginLeft: "auto" }}
      >
        {!isOpen ? `Show Comments ${comments.length}` : "Hide Comments"}
      </button>
    </>
  );
};

export default Comment;
