// import { useState } from 'react'
import './App.css'
import Profile from './components/profile/Profile.jsx';
import userData from './components/profile/userData.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App
