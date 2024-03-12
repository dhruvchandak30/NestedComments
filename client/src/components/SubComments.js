import React from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const SubComments = ({ data }) => {
  const formatDateDifference = (dateString) => {
    const currentDate = new Date();
    const commentDate = new Date(dateString);
    const differenceInTime = currentDate.getTime() - commentDate.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    if (differenceInDays === 1) {
      return "1 day ago";
    } else if (differenceInDays > 1) {
      return `${differenceInDays} days ago`;
    } else {
      return "Today";
    }
  };

  const sanitizeHTML = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <div className="replies">
      {data.map((comment) => (
        <div className="comment" key={comment._id}>
          <div className="comment-border-link">
            <span className="sr-only"></span>
          </div>
          <div className="comment-heading">
            <div className="comment-info">
              <div
                className="comment-author"
                dangerouslySetInnerHTML={sanitizeHTML(comment.author)}
              ></div>
              <p className="m-0">{formatDateDifference(comment.date)}</p>
            </div>
          </div>
          <div className="comment-body">
            <p dangerouslySetInnerHTML={sanitizeHTML(comment.text)}></p>
            <button className="Reply" type="button">
              Reply
            </button>
            <button className="Like" type="button">
              Like
            </button>
          </div>
          {comment.subcomments && <SubComments data={comment.subcomments} />}
        </div>
      ))}
    </div>
  );
};

export default SubComments;
