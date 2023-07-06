import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useUserContext } from "../context/userContext";

const CommentForm = () => {
  const { logedUser } = useUserContext();

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [name, setname] = useState("");

  const submitComment = () => {
    setComments((comments) => [...comments, comment]);
  };

  const changeComment = (e) => {
    setComment(e.target.value);
    setname(logedUser.name);
  };
  return (
    <div className="comment-form">
      <div className="comment-form__title">
        <h4>Add a Review</h4>
      </div>
      <div className="comment-form--rate">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <textarea
        value={comment}
        onChange={changeComment}
        id=""
        cols="30"
        rows="10"
        placeholder="What do you think about that product?"
      ></textarea>
      <button onClick={submitComment} type="submit" className="btn">
        Submit review
      </button>
    </div>
  );
};

export default CommentForm;
