import React from "react";
import SubComments from "./SubComments";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const Comments = ({ data }) => {
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

  const sanitizedData = {
    title: sanitizeHTML(data.title),
    desc: sanitizeHTML(data.desc),
    author: sanitizeHTML(data.author),
    date: formatDateDifference(data.date),
  };

  return (
    <div className="comment-thread">
      <div>
        <h3 dangerouslySetInnerHTML={sanitizedData.title}></h3>
      </div>
      <div className="comment" id="comment-1">
        <div className="comment-border-link">
          <span className="sr-only">Jump to comment-1</span>
        </div>
        <div className="comment-heading">
          <div className="comment-info">
            <div
              className="comment-author"
              dangerouslySetInnerHTML={sanitizedData.author}
            ></div>
            <p className="m-0">{sanitizedData.date}</p>
          </div>
        </div>
        <div className="comment-body">
          <p dangerouslySetInnerHTML={sanitizedData.desc}></p>
          <button className="Reply" type="button">
            Reply
          </button>
          <button className="Like" type="button">
            Like
          </button>
        </div>
        {data.comments && <SubComments data={data.comments} />}
      </div>
    </div>
  );
};

export default Comments;
