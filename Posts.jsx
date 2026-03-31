import React from 'react'
import { useState, useEffect} from 'react'

function Posts() {

    const[posts, setPosts] = useState([])
    const[loading, setLoading] = useState(true)
    const[error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3000/posts')
        .then((data) => data.json())
        .then((data) => setPosts(data))
        .catch(err => setError('Failed to load posts'))
        .finally(() => setLoading(false))
    },[])
  return (
    <div className='d-flex justify-content-center '>
        {loading ? (
            <div>Loading posts...</div>
        ) : error ? (
            <div>Error: {error}</div>
        ) : posts.length > 0 ? (
            <div>
                {posts.map((post)=>(

                    <div className="border rounded p-3 mb-3 " key={post.id}>
                        <div className='d-flex align-items-center gap-2 p-2'>
                            <img className=" dp rounded-circle" src={post.profileImage} alt="Profile pic" />
                            <h4>{post.username}</h4>
                        </div>
                        <img className="pic" src={post.postImage} alt="Posts" />
                        <div className='d-flex gap-3 p-2'>
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-chat"></i>
                            <i className="bi bi-send"></i>
                            <i className="bi bi-bookmark"></i>
                        </div>
                        <div>
                            <b>{post.likes}</b>
                        </div>
                        <p>{post.caption}</p>
                    </div>
                ))}
            </div>
        ) : (
            <div>
                No posts available
            </div>
        )}
    </div>
  )
}

export default Posts