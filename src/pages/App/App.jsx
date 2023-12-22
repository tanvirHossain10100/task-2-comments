import { useState } from "react";
import "./App.css";
import CommentPage from "../CommentsPages/CommentPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CommentPage></CommentPage>
      </div>
    </>
  );
}

export default App;
