import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DetallePost = React.memo(({ url }) => {

    const [post, setPost] = useState([]);

    useEffect(() => console.log('RENDER Detalle'));

    useEffect(() => {
        axios.get('http://localhost:3000/api/publishes', {
            
        }).then(response => {
            console.log(response.data);
            setPost(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            <h2>DETALLE</h2>
            {post &&
                <div>
                    <div className="car-body">
                    <img src={post.img} className="card-img" alt="imagen"/>
                    </div>
                    <h5 className="card-title">{post.titulo}</h5>
                    <p className="card-text">{post.post}</p>
                </div>
            }
        </div>
    );
});

export default DetallePost;