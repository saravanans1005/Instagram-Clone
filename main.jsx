import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './index.css'
import App from './App.jsx'
import ViewStory from './ViewStory.jsx'
import Feed from './Feed.jsx'
import Profile from './Profile.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>

        {/* Layout Route */}
        <Route path="/" element={<App />}>

          {/* Feed Page */}
          <Route index element={<Feed />} />

          <Route path="/profile" element={<Profile />} />

          {/* Story Page */}
          <Route path="story/:id" element={<ViewStory />} />

        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>
)