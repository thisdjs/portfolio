
import React from "react"

import styled from "styled-components"
const App = styled.div`
  display: flex;
` 

export default function Application () {
  return (
    <App>
      <AppBar />
      <AppContent sections={[{}]}/>
    </App>
  )
}

function AppBar ( ) {
  return (
    <div className="app-bar">
        <div className="app-bar-logo">

        </div>
        <div className="app-bar-menu">

        </div>
    </div>
  )
}

function AppContent ( { sections } ) {
  return (
    <div className="app-content">
    <Grid container>
        {sections.map( section => (
          <Grid item xs={12} sm={4} lg={3}>
            <Section section={section} />
          </Grid>
        ))}
    </Grid>
      </div>
  )
}


function Section ( { section }) {
  return (
    <div className="app-section">
      <User user={section.user} />
      <SectionDetails details={section.details}/>
    </div>
  )
}

function User ( { user } ) {
  return (
    <div className="app-user">
        <div className="app-user-photo">

        </div>
        <div className="app-user-actions">

        </div>
      </div>
  )
}

function SectionDetails ( { details }) {
  return (
    <div className="app-user-details">
      <div className="app-user-details-title">

      </div>
      <div className="app-user-details-description">

      </div>
    </div>
  )
}