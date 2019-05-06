import React from 'react'

export default function StyledSection(props) {

    const {children} = props

    return(
        <div className="section">
            <div className="section-container"> 
                <div className="section-content"> 
                    {children}
                </div>
            </div>
        </div>
    )
}