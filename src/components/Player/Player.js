import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body'
import './Player.css'
import Footer from '../Footer/Footer'
function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar/>
                <Body spotify={spotify}/>
            {/* sidebar */}
            {/* Body */}
            </div>
           <div>
               <Footer/>
           </div>
        </div>
    )
}

export default Player
