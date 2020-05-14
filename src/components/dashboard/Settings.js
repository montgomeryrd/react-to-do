import React, { useState, useEffect, useRef } from 'react';
import "../../styles/settings.css";

const Settings = () => {
    const ref = useRef();
    const [settings, showSettings] = useState(false);
    useOnClickOutside(ref, () => showSettings(!settings));

    // const [credits, showCredits] = useState(false);
    // function toggleCredits() {showCredits(!credits)}
    
    // const [help, showHelp] = useState(false);
    // function toggleHelp() {showHelp(!help)}

    // const [task, showTask] = useState(false);
    // function toggleTask() {showTask(!task)}

    // const [goal, showGoal] = useState(false);
    // function toggleGoal() {showGoal(!goal)}

    // const [achievement, showAchievement] = useState(false);
    // function toggleAchievement() {showAchievement(!achievement)}
    const [position, setPosition] = useState(0);
    const [state] = useState(["", "switch-user", "delete-profile", "credits", "about"]);

    const data = (id) => {
        switch(id) {
            case "switch-user" : return (
                <div>
                    <p>switch to profile:</p>
                    <ul>
                        <li></li>
                    </ul>
                </div>
            )
            case "delete-profile" : return (
                <div>
                    <p>Delete current profile?  <button>YES</button><button>NO</button></p>
                </div>
            )
            case "credits" : 
                return (
                    <div>
                        <h4>Base App build from:</h4>
                        <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" rel="noopener noreferrer" target="_blank">The Net Ninja</a>
                        <p>Complete React Tutorial (Redux) #23 - Todo App</p>
                    </div>
                )
            case "about" :
                return (
                    <div>
                        <span>
                            To-Dohism is an app built with the philosophy that a conscious life begins with 
                            purpose. With that in mind, the app itself is not very robust in functionality. 
                            Rather it cuts out a lot of the fat of the more powerful to-do list apps available in 
                            order to increase intention and ease of use. It is quick to manage and easy to 
                            implement in day-to-day routine. Complete daily tasks, pursue long-term goals, and 
                            know that you are living a conscious life.
                        </span>
                    </div>
                )
            default : return (
                <p>click outside modal window to exit</p>
            )
        }
    }

    return (
        <div id="settings">
            {settings ? (
                <div className="settings-content" ref={ref}>
                    <ul>
                        <li className="settings-list" onClick={() => setPosition(position - position)}>

                        </li>
                        <li className="settings-list" onClick={() => setPosition(position - position + 1)}>
                            switch user
                        </li>
                        <li className="settings-list" onClick={() => setPosition(position - position + 2)}>
                            delete profile
                        </li>
                        <li className="settings-list" onClick={() => setPosition(position - position + 3)}>
                            credits
                        </li>
                        <li className="settings-list" onClick={() => setPosition(position - position + 4)}>
                            about
                        </li>
                        <li>
                            <br></br>
                            {data(state[position])}
                        </li>
                    </ul>
                    {/* <div>
                        <br></br>
                        {data(state[position])}
                    </div> */}
                </div>
            ) : (
                <div className="hamburger" onClick={() => showSettings(true)}>
                    <div className="hamburger-lines"></div>
                    <div className="hamburger-lines"></div>
                    <div className="hamburger-lines"></div>
                </div>
            )}
        </div>
    )
}

function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = event => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
  
          handler(event);
        };
  
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
  
        return () => {
          document.removeEventListener('mousedown', listener);
          document.removeEventListener('touchstart', listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

export default Settings;