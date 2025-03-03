import React from 'react'

function Script({username,username1}) {

    return (
        <><div className='h-50 w-50 bg-amber-300'>{username}</div>
        <button>{username1||"Visit Me"}</button>

        
        </>
    )
}

export default Script
