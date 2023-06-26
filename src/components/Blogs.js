// jshint esversion:6

import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';

function Blogs() {
  // consuming 
  const {loading,posts,fetchBlogPosts,page}=useContext(AppContext);

  useEffect(()=>{
    console.log(posts)
    console.log(posts.length)
    fetchBlogPosts(page);
  },[page]);

  return (
    <div className='flex flex-1 flex-col gap-7  w-11/12 max-w-[670px] mx-auto p-5 text-justify'>
      {loading ? (<Spinner />):( 
        posts.length==0 ? (<div><p>No Post found</p></div>):(posts.map((data)=> <Card title ={data.title} author={data.author} date={data.date} category={data.category} tags={data.tags} content={data.content} key={data.id} />))
        )}
    </div>
  )
}

export default Blogs