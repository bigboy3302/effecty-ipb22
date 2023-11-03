import {useEffect, useState} from "react";

 function Comment(){

    const [comment, setComment] = useState({});
    const[loading, setLoading] = useState(true);
        
    
    useEffect(() => {
        async function alah(){
        const response = await fetch (
        "https://jsonplaceholder.typicode.com/comment/1"
        );
        const data = await response.json();
        setComment(data);
        setLoading(false);
        }
        alah();
    
    }, []);
    return(
        <>
        <p>name: {comment.name}</p>
        <p>gmail:{comment.gmail}</p>
        <p>body:{comment.body}</p>
        </>
    );
 }

 export default Comment;