import "./Comments.css";
const Comment = ({ comment: { text, name } }) => {
  return (
    <>
      <div id="comment">
        <div className="timeStamp">
          <h2>{name}</h2>
        </div>
        <div className="commentBody">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};
export default Comment;
