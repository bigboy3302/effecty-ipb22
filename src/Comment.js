import React, { useEffect, useState } from "react";

function Comment() {
  const [comment, setComment] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments/69"
        );
        const data = await response.json();
        setComment(data);
        setLoading(false);
      } 
    
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading???????????????????????????</p>
      ) : (
        <>
          <p>userId:{comment.postId}</p>
          <p>id:{comment.id}</p>
          <p>title: {comment.name}</p>
          <p>gmail: {comment.email}</p>
          <p>body: {comment.body}</p>
        </>
      )}
    </>
  );
}

export default Comment;
