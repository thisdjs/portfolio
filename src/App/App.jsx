import React from 'react'
import './App.css'
import Emoji from 'a11y-react-emoji'
import { UilGithubAlt } from '@iconscout/react-unicons'
import { UilLinkedinAlt } from '@iconscout/react-unicons'
import { UilFileAlt } from '@iconscout/react-unicons'
import { UilEnvelopeEdit } from '@iconscout/react-unicons'
import { UilSkypeAlt } from '@iconscout/react-unicons'
import { UilWhatsapp } from '@iconscout/react-unicons'
import profilePic from './assets/profile.jpeg'
import profilePicHover from './assets/profile_2.png'

// import { useMediaQuery } from 'react-responsive'

const emoji = "👨‍💻"
const socialIconColor = '#81A1C1' // check App.css for Nord theme colors

function App() {

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
                <Emoji symbol={emoji} label="emoji" />
              </p>
              <p className="motto">Motto: <i>The trouble is, you think you have time.</i></p>
            </section>

            <section className="social-icons">
              <a title="Github" rel="noopener noreferrer" target="_blank" type="button" href="https://github.com/thisdjs">
                <UilGithubAlt size="20" color={socialIconColor}/>
              </a>
              <a title="LinkedIn" rel="noopener noreferrer" target="_blank" type="button" href="https://www.linkedin.com/in/david-j-santos/">
                <UilLinkedinAlt size="20" color={socialIconColor} />
              </a>
              <a title="CV" rel="noopener noreferrer" target="_blank" type="button" href="http://www.example.com">
                <UilFileAlt size="20" color={socialIconColor} />
              </a>
              <a title="Email" rel="noopener noreferrer" target="_blank" type="button" href="http://www.example.com">
                <UilEnvelopeEdit size="20" color={socialIconColor} />
              </a>
              <a title="Skype" rel="noopener noreferrer" target="_blank" type="button" href="skype:profile_name?live:ad9fb5f21dec303">
                <UilSkypeAlt size="20" color={socialIconColor} />
              </a>
              <a title="Whatsapp" rel="noopener noreferrer" target="_blank" type="button" href="https://wa.me/351961377275">
                <UilWhatsapp size="20" color={socialIconColor} />
              </a>
            </section>

          </div>
        </div>
      }
    </>
  );
}

export default App;