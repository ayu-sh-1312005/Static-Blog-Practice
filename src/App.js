import React from 'react';
import "./App.css";
import Header from './components/Header';
import Pagination from './components/Pagination';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className='flex w-full flex-col h-screen relative'>
      <Header />
      <Blogs /> 
      <Pagination /> 
    </div>
  )
}

export default App