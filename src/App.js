import React from 'react';
import './App.css';
import Navbar from './Component/Navbar'
import Notes from './Component/Notes'

export default function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Notes Taking Component */}
      <Notes />

    </>

  )
}
