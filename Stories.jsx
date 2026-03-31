import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Stories() {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/Story')
      .then(res => res.json())
      .then(setStories)
      .finally(() => setLoading(false))
      .catch(console.error)
  }, [])

  if (loading) return <div className="p-3">Loading stories...</div>

  return (
    <div className='story d-flex align-items-center gap-3 p-2 overflow-auto'>
      {stories.map(story => (
        <Link key={story.id} to={`/story/${story.id}`} className="text-decoration-none text-dark">
          <div className="text-center">
            <img src={story.profileImage} alt={story.username} className="story-border rounded-circle" />
            <small className="d-block">{story.username}</small>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Stories
