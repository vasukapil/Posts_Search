import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Posts from './Components/Posts';

function App() {
  const [posts,setPosts] = useState([]);
  const [searchTerm,setSearchTerm] = useState();
  const [click,setClick] = useState(false)

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  const handleSubmit = () => {
    
      let updatedPosts = posts.filter(post => post.title.includes(searchTerm));
      setPosts(updatedPosts);
      setClick(true);
    
  }
  console.log(click)
  const fetchPosts = async() =>{
     
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data);

  }
  useEffect(()=>{
   fetchPosts();

  },[click])
  console.log(click)
  return (
    <div style={{margin : "20px"}}>

      <input onChange={handleChange} value={searchTerm}></input>
      <button onClick={handleSubmit}>Search</button>
      <div>
      <Posts searchTerm={searchTerm} posts={posts} click={click}/>
      </div>
      
    </div>
  );
}

export default App;
