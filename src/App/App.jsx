import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Emoji from 'a11y-react-emoji'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilFileAlt } from '@iconscout/react-unicons'
import { UilEnvelopeEdit } from '@iconscout/react-unicons'
import { UilSkypeAlt } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'
import profilePic from './assets/profile.jpeg'
import profilePicHover from './assets/profile_2.png'
import './App.css'

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <>
      { profilePic &&
        <div id="App" className="App">
          <div className="content-wrapper">

            <section className="selfie-content">
              <div className="img-wrapper">
                <img
                  src={profilePic}
                  className="selfie"
                  alt="Profile"
                  onMouseOver={(e) => {
                    profilePicHover && (e.currentTarget.src = profilePicHover);
                  }}
                  onMouseOut={(e) => {
                    profilePic && (e.currentTarget.src = profilePic);
                  }}
                >

                </img>
              </div>
              <h2 className="name">David</h2>
            </section>

            <section className="bio-content">
              <p>
                I make content for the web&nbsp;
                <Emoji symbol="👨‍💻" label="tech" />
              </p>
            </section>

            <section className="social-icons">
              <a target="_blank" type="button" href="http://www.example.com">
                <UilGithubAlt size="20" color="#30475e" label="github"/>
              </a>
              <a target="_blank" type="button" href="http://www.example.com">
                <UilLinkedinAlt size="20" color="#30475e" />
              </a>
              <a target="_blank" type="button" href="http://www.example.com">
                <UilFileAlt size="20" color="#30475e" />
              </a>
              <a target="_blank" type="button" href="http://www.example.com">
                <UilEnvelopeEdit size="20" color="#30475e" />
              </a>
              <a target="_blank" type="button" href="http://www.example.com">
                <UilSkypeAlt size="20" color="#30475e" />
              </a>
              <a target="_blank" type="button" href="http://www.example.com">
                <UilWhatsapp size="20" color="#30475e" />
              </a>
            </section>

          </div>
        </div>
      }
    </>
  );


}

export default App;