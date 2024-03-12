import React, { useEffect, useState } from "react";
import axios from "axios";
import Comments from "./Comments";
import "./Comment.css";

const FetchComments = () => {
  const [commentsData, setCommentsData] = useState();
  const [loading, setLoader] = useState(false);
  const [warning, setWarning] = useState("");
  const fetchCommentsHandler = () => {
    setLoader(!loading);
    fetch("https://nestedcomments-m6yj.onrender.com/api/v1/getComments")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function (data) {
        setLoader(false);
        console.log(data);
        console.log("Fetched Successfully");
        setCommentsData(data);
      })
      .catch(function (error) {
        setLoader(!loading);
        setWarning("Failed To Fetch Comments ");
        console.error("Error:", error);
      })
      .finally(function () {
        console.log("Hehe");
      });
  };
  return (
    <div className="fetch-div">
      {!commentsData && (
        <button className="fetch-button" onClick={fetchCommentsHandler}>
          Fetch Comments
        </button>
      )}
      {loading && <div className="loader"></div>}
      {warning && <p>{warning}</p>}
      {commentsData &&
        commentsData.userData.map((item) => {
          return <Comments key={item._id} data={item} />;
        })}
    </div>
  );
};

export default FetchComments;
