import {useEffect, useState} from "react"
import Post from "./Post.js"

function PostList() {
    const [allPost, setAllPost] = useState([]);

    useEffect(() => {
        async function getPost() {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            setAllPost(data);
        
        } 
    
        getPost();
    }, []);
        const AllPostJSK = allPost.map((post, index) => {
            return <Post key={index} {...post}/>
        });
    return(
        <div>
            {AllPostJSK}
        </div>
    );
}
export default PostList;