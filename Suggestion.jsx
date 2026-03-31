import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Suggestion() {

  const [profile, setProfile] = useState(null)
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    Promise.all([
      fetch('http://localhost:3000/profile').then(res => res.json()),
      fetch('http://localhost:3000/suggestions').then(res => res.json())
    ])
      .then(([profileData, suggestionsData]) => {
        setProfile(profileData)
        setSuggestions(suggestionsData)
      })
      .catch(err => setError('Failed to load profile/suggestions'))
      .finally(() => setLoading(false))

  }, [])

  const handleFollow = async (id, username) => {
    axios.post('http://localhost:3000/followers', {
      id: id,
      username: username
    })
      .then(() => alert("Followed"))
      .catch(err => console.log(err))
  }

  return (
    <div className='suggestions-container p-3'>

      {loading ? (
        <div>Loading</div>

      ) : error ? (
        <div>Error: {error}</div>

      ) : profile ? (
        <>
          <div className='d-flex align-items-center gap-2 p-2 mb-3'>
            <img className="dp rounded-circle" src={profile.profileImage} alt="Profile pic" />
            <h5>{profile.username}</h5>
            <p className='ms-auto text-primary'>Switch</p>
          </div>

          <div>

            <div className='d-flex'>
              <h6>Suggested for you</h6>
              <h6 className='ms-auto'>See all</h6>
            </div>

            <div className='d-flex flex-column gap-2'>

              {suggestions.map(sug => (

                <div key={sug.id} className='d-flex align-items-center gap-3 p-2 hover'>

                  <img className="dp rounded-circle" src={sug.profileImage} alt={sug.username} />

                  <span>{sug.username}</span>

                  <button
                    className='btn btn-sm ms-auto text-primary'
                    onClick={() => handleFollow(sug.id, sug.username)}
                  >
                    Follow
                  </button>

                </div>

              ))}

            </div>

          </div>
        </>

      ) : (
        <p>No profile data</p>
      )}

    </div>
  )
}

export default Suggestion