import React from 'react'

const Document = ({ children }) => {
    return (
        <div className="w-full h-full flex flex-col space-y-4">
            { children }
        </div>
    )
}

export default Document