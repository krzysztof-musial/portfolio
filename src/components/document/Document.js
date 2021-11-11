import React from 'react'

const Document = ({ children }) => {
    return (
        <div className="w-full h-full flex flex-col space-y-8">
            { children }
        </div>
    )
}

export default Document