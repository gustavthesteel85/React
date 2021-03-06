import React from 'react'

function Button({handleClick, children}) {
    console.log(`Btn component - `, children)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button