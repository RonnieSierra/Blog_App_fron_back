import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function ListaPosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/publishes', {
            
        }).then(response => {
            setPosts(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div className="container">
            <h3 className="title p-3">Mitologías del Mundo</h3>
            
                <div class="row align-items-center">
                    {posts.map(post => (
                        <>
                        <div className="col">
                            <img className="list-img rounded" src={post.img}  alt="imagen"/>
                            <h5 className="card-title"  >{post.titulo}</h5>
                            <NavLink className=" btn btn-primary mb-5" to="/detalles">Más detalles sobre la {post.titulo}</NavLink> 
                        </div>
                        </>
                    ))}

                    
                </div>
                {/* <NavLink className=" btn btn-primary mb-5" to="/detalles">Más detalles sobre las mitologias</NavLink>    */}                 
                
        </div>);

}

export default ListaPosts;