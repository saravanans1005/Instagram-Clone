import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'

function Profile() {

  const [profile, setProfile] = useState(null)
  const [followers, setFollowers]= useState([])
  const [unfollowed, setUnfollowed]= useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/profile')
      .then((res) => {
        setProfile(res.data)
      })

      axios.get('http://localhost:3000/followers')
      .then((res)=> {
        setFollowers(res.data)
      })
  }, [unfollowed])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile({
      ...profile,
      [name]: value
    })
  }

  const handleUpdate= async()=> {
    axios.put("http://localhost:3000/profile",profile)
    .then(console.log("Updated"))
    .catch(err=> console.log(err))
  }

  const handleUnfollow = async (id) => {
  axios.delete(`http://localhost:3000/followers/${id}`)
    .then(() => {
      alert("Unfollowed")
      .then(setUnfollwed(!unfollowed))

      // remove user from UI
      setFollowers(prev => prev.filter(user => user.id !== id))
    })
    .catch(err => console.log(err))
}

  return (
    <div className="p-4">
      {profile ? (
        <div>

          <img
            src={profile.profileImage}
            className="profile rounded-circle"
            width="120"
          />

          <h4>{profile.username}</h4>

          <input
            type="text"
            name="username"
            value={profile.username}
            className="form-control mb-2"
            onChange={handleChange}
          />

          <input
            type="text"
            name="profileImage"
            value={profile.profileImage}
            className="form-control"
            onChange={handleChange}
          />

          <button className='btn btn-dark my-5' 
          onClick={handleUpdate}>
            Update your details
          </button>

        </div>
      ) : (
        <h4>Loading profile...</h4>
      )}

      {followers.length>0 ?(
        followers.map(followers => (
          <div className="d-flex my-1" key={followers.id}>
            {followers.username}
            <button className='btn btn-danger ms-auto'
            onClick={()=>{handleUnfollow(followers.id)}}
            >Unfollow</button>
          </div>
        ))
      ):(
        <div>Loading... </div>
      )}
    </div>
  )
}

export default Profile