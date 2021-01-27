import React, { useEffect, useState } from 'react'
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

const emojiList = ["👨‍💻", "🕵️‍♂️", "🥷", "🦸‍♂️", "🧙‍♂️", "😱", "🤓", "🧐", "😕", "😤", "😫", "🤖", "💪"]
const socialIconColor = '#81A1C1' // check App.css for Nord theme colors

function App() {
  /*
  const [emoji, setEmoji] = useState(emojiList[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmoji(emojiList[Math.floor(Math.random() * emojiList.length)])
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  */
  /* 
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  */

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
                <Emoji symbol={emojiList[0]} label="emoji" />
              </p>
              <p className="motto">Motto: <i>The trouble is, you think you have time.</i></p>
            </section>

            <section className="social-icons">
              <a title="Github" target="_blank" type="button" href="https://github.com/thisdjs">
                <UilGithubAlt size="20" color={socialIconColor} rel="noopener noreferrer"/>
              </a>
              <a title="LinkedIn" target="_blank" type="button" href="https://www.linkedin.com/in/david-j-santos/">
                <UilLinkedinAlt size="20" color={socialIconColor} rel="noopener noreferrer" />
              </a>
              <a title="CV" target="_blank" type="button" href="http://www.example.com">
                <UilFileAlt size="20" color={socialIconColor} rel="noopener noreferrer" />
              </a>
              <a title="Email" target="_blank" type="button" href="http://www.example.com">
                <UilEnvelopeEdit size="20" color={socialIconColor} rel="noopener noreferrer" />
              </a>
              <a title="Skype" target="_blank" type="button" href="skype:profile_name?live:ad9fb5f21dec303">
                <UilSkypeAlt size="20" color={socialIconColor} rel="noopener noreferrer" />
              </a>
              <a title="Whatsapp" target="_blank" type="button" href="https://wa.me/351961377275">
                <UilWhatsapp size="20" color={socialIconColor} rel="noopener noreferrer" />
              </a>
            </section>

          </div>
        </div>
      }
    </>
  );
}

export default App;