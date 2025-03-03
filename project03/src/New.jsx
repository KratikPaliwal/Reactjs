import React from 'react'

function New({username,newly}) {
    console.log(username);
    

    
    return (
        <>
        <div className='h-50 w-50 bg-amber-300'>card{username}</div>
        <div className='flex justify-center items-center'>
        <button>{newly}</button>
        </div>
    
        </>
    )
}

export default New
