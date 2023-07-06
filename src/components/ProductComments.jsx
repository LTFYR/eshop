import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useUserContext } from "../context/userContext";
import "../assets/sass/components/ProductDescription.scss";
import CommentForm from "./CommentForm";

const getComment =
  localStorage.getItem("comment") !== null
    ? JSON.parse(localStorage.getItem("comment"))
    : [];

const getName =
  localStorage.getItem("username") !== null
    ? JSON.parse(localStorage.getItem("username"))
    : [];

const ProductComments = () => {
  const { logedUser } = useUserContext();

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(getComment);
  const [name, setname] = useState(getName);

  const submitComment = () => {
    setComments((comments) => [...comments, comment]);
    setname(logedUser.name);
  };

  useEffect(() => {
    localStorage.setItem("comment", JSON.stringify(comments));
    localStorage.setItem("username", JSON.stringify(name));
  }, [comments, name]);

  const changeComment = (e) => {
    setComment(e.target.value);
    setname(logedUser.name);
  };

  return (
    <>
      <div className="product-comments">
        <div className="product-comments__title">
          <h4>
            {comments.length} review for <span>blue dress for woman</span>
          </h4>
        </div>
        {comments.map((commentnew) => {
          return (
            <div className="product-comments__content">
              <div className="product-comments__content__image">
                <img src={`${logedUser ? logedUser.picture : ""}`} alt="" />
              </div>
              <div className="product-comments__content__detail">
                <div className="product-comments__content__detail--rating">
                  <h5>{name}</h5>
                  <div>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
                <h6>{new Date().toLocaleString() + ""}</h6>
                <p>{commentnew}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <CommentForm changeComment={changeComment} /> */}
      <div className="comment-form">
        <div className="comment-form__title">
          <div className="comment-form__title--add">
            <h4>Add a Review</h4>
          </div>
          <div className="comment-form__title--rate">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
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
    </>
  );
};

export default ProductComments;
