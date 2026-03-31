import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ViewStory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [stories, setStories] = useState([]);
  const [story, setStory] = useState(null);

useEffect(() => {
  fetch("http://localhost:3000/Story")
    .then(res => res.json())
    .then(data => {
      setStories(data)

      const foundStory = data.find(
        (item) => String(item.id) === String(id)
      )

      setStory(foundStory)
    })
    .catch(console.error)
}, [id])

  const currentIndex = stories.findIndex((s) => s.id === Number(id));

  const goNext = () => {
    if (currentIndex < stories.length - 1) {
      navigate(`/story/${stories[currentIndex + 1].id}`);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      navigate(`/story/${stories[currentIndex - 1].id}`);
    }
  };

  if (!story) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100 text-white bg-dark">
        Loading story...
      </div>
    );
  }

  return (
    <div className="vh-100 bg-dark d-flex flex-column justify-content-center align-items-center text-white">

      {/* Home button */}
      <button
        className="btn btn-light position-absolute"
        style={{ top: "20px", left: "20px" }}
        onClick={() => navigate("/")}
      >
        Home
      </button>

      {/* Username */}
      <h5 className="mb-3">{story.username}</h5>

      {/* Story Image */}
      <img
        src={story.storyImage || story.profileImage}
        alt="story"
        style={{
          maxHeight: "80vh",
          maxWidth: "90%",
          borderRadius: "10px"
        }}
      />

      {/* Navigation */}
      <div className="mt-3 d-flex gap-4">
        <button
          className="btn btn-outline-light"
          onClick={goPrev}
          disabled={currentIndex === 0}
        >
          Prev
        </button>

        <button
          className="btn btn-outline-light"
          onClick={goNext}
          disabled={currentIndex === stories.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ViewStory;