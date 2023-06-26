import React from 'react';

function Card({title,author,date,category,tags,content,id}) {
  return (
    <div>
        <h3 className='font-bold text-lg mb-1'>{title}</h3>
        <div className='text-sm'>By <i>{author}</i> on <span className='font-bold underline decoration-dashed underline-offset-2'>{category}</span></div>
        <p className='text-xs'>Posted On {date}</p>
        <p className='my-1'>{content}</p>
        <ul className='flex flex-wrap gap-1'>
            {tags.map((tag)=> (<li className='underline text-blue-700'>#{tag}</li>))}
        </ul>
    </div>
  )
}

export default Card