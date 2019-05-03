import React from 'react'

export default function StyledSection(props) {

    const {children} = props

    return(
        <div className="section">
            <div className="container"> 
                <div className="content"> 
                    {children}
                </div>
            </div>
        </div>
    )
}