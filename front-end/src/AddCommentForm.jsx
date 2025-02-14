import React, { useState } from "react";

const AddCommentForm = ({ onAddComment }) => {
  const [nameText, setNameText] = useState("");
  const [commentText, setCommentText] = useState("");

  return (
    <div>
      <h3>Add a comment</h3>
      <label htmlFor="">
        Name:
        <input
          type="text"
          value={nameText}
          onChange={(e) => setNameText(e.target.value)}
        />
      </label>
      <label htmlFor="">
        Comment:
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          onAddComment({ nameText, commentText });
          setNameText("");
          setCommentText("");
        }}
      >
        Add Comment
      </button>
    </div>
  );
};

export default AddCommentForm;
