import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import Comment  from "./Comment";
import Post from "./Post";
import PostList from "./PostList"

function App() {
  const [toDo, setToDo] = useState({});
  const[loading, setLoading] = useState(true);
 
 useEffect(() => {
   async function getToDo(){
  const response = await fetch (
    "https://jsonplaceholder.typicode.com/todos/69"
    );
  const data = await response.json();
  setToDo(data);
  setLoading(false);
   }
   getToDo();

 }, []);
 
  // const toDo = {
  //   userId: 1,
  //   id: 1,
  //   title: "delectus aut autem",
  //   completed: false,
  // };

  return (
    <>
    
     {/* {loading ? <p>loadinggg</p> : <Comment {...Comment}/>} */}
    
     <PostList />
    </>
  );
  }
  //{loading ? <p>BIGBOY...</p> : <ToDo  {...toDo}/>}
export default App;
