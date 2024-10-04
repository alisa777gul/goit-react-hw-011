// import { useState } from 'react'
import './App.css'
import Profile from '../src/components/profile/Profile';
import userData from '../src/components/profile/userData.json';

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
