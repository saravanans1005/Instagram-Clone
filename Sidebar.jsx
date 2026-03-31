import React from 'react'
import { useNavigate } from 'react-router-dom'
function Sidebar() {

  const navigate = useNavigate()
  return (
    <>
    <div className='d-flex  flex-column gap-4 m-3 position-fixed'>
        <img src=".\src\assets\downloadtext.png" alt="" className="logotext" />
        <div><i className="bi bi-instagram"></i></div>
        <div><i className="bi bi-house-door-fill"></i>Home</div>
        <div><i className="bi bi-play-btn"></i>Reels</div>
        <div><i className="bi bi-send"></i>Messages</div>
        <div><i className="bi bi-search"></i>Search</div>
        <div><i className="bi bi-compass"></i>Explore</div>
        <div><i className="bi bi-heart"></i>Notifications</div>
        <div><i className="bi bi-plus"></i>Create</div>
        <div><i className="bi bi-graph-up"></i>Dashboard</div>
        <div onClick={()=> {navigate('/profile')}}>
<i className="bi bi-person-circle"></i>Profile
</div>
        <div className='position-fixed bottom-0 mb-4'><i className="bi bi-three-dots"></i>More</div>
    </div>
    </>
  )
}

export default Sidebar