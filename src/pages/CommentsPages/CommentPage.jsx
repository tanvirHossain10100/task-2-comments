import { useState } from "react";
import Comment from "../../components/Comment/Comment";
import "./CommentPage.css";

const CommentPage = () => {
  const addToComment = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const comment = e.target.comment;
    console.log(name);
    console.log(comment);
    setCommens([
      { text: comment.value, id: `${comments.length + 1}`, name: name.value },
      ...comments,
    ]);
    name.value = "";
    comment.value = "";
  };

  const fbStyleComments = [
    {
      name: "habib",
      timestamp: "10 minutes ago",
      text: "This post made my day! 😄",
      id: 1,
    },
    {
      name: "kholil",
      timestamp: "20 minutes ago",
      text: "I wish I could be there with you! Looks amazing. 😍",
      id: 2,
    },
    {
      name: "mahim",
      timestamp: "30 minutes ago",
      text: "Tea and rain - a perfect combination! ☕☔",
      id: 3,
    },
    {
      name: "selim",
      timestamp: "40 minutes ago",
      text: "Your adventures always inspire me! 🌟",
      id: 4,
    },
    {
      name: "korim",
      timestamp: "50 minutes ago",
      text: "Dhaka streets are full of life! Keep exploring! 🚶‍♀️🌆",
      id: 5,
    },
  ];
  const [comments, setCommens] = useState(fbStyleComments);
  return (
    <>
      <div id="commentsContainer">
        <h1>Comments of the all users</h1>
        <div className="form">
          <form onSubmit={addToComment}>
            <div className="input">
              <input
                type="text"
                name="name"
                placeholder="type your name"
                required
              />
              <input
                name="comment"
                type="text"
                placeholder="type your comment"
                required
              />
            </div>
            <div className="addBtn">
              <button type="submit" id="addTodoBtn">
                Add your new comment
              </button>
            </div>
          </form>
        </div>

        <div>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment}></Comment>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentPage;
