// jshint esversion:6

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


function Pagination() {

  const {page,totalPages,setPage,handlePageChange}=useContext(AppContext);

  function prevHandler(event) {  
    handlePageChange(page-1);
  };
  function nextHandler(event){
    handlePageChange(page+1);
  };

  return (
    <div className='flex justify-center items-center bg-white shadow-lg p-5 w-full sticky bottom-0'>
      <div className='flex items-center justify-between w-11/12 max-w-[670px] px-5  '>
        <div className='flex gap-2'>
            {page==1 ?
            (null):(<button className='border-2 gray-400 p-2 rounded-sm' onClick={prevHandler}>Previous</button>)
            }
            {page==totalPages ?
            (null):(<button className='border-2 gray-400 p-2 rounded-sm' onClick={nextHandler}>Next</button>)
            }
        </div>
        <div>
          <p>Page {page} of {totalPages}</p>
        </div>
      </div>
    </div>
  )
}

export default Pagination