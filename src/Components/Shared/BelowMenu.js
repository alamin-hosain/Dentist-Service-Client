import React from 'react'

const BelowMenu = ({ title }) => {
    return (
        <div className='bg-[#f36259] w-full h-20 flex justify-center items-center mb-10 shadow-sm'>
            <h2 className='text-2xl lg:text-4xl  text-white'>{title}</h2>
        </div>
    )
}

export default BelowMenu