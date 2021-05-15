import { useEffect, useState } from "react";
import axios from 'axios';


function Post() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/publishes', {
            
        }).then(response => {
            console.log(response.data);
            setPosts(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);
    
    return <div className="card mb-3">
    {posts.map(post => (
        <>
        <div className="car-body">
            <img src={post.img} className="card-img" alt="imagen"/>
            <div >
                <h5 className="card-title">{post.titulo}</h5>
                <p className="card-text">{post.post}</p>
                
            </div>
            
           
        </div>
        </>
        ))}
    
        </div>
}

export default Post;
