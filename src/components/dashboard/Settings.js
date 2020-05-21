/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import "../../styles/settings.css";

const Settings = (props) => {
    const ref = useRef();
    const [settings, showSettings] = useState(false);
    useOnClickOutside(ref, () => showSettings(!settings));

    const [position, setPosition] = useState(0);
    const state = ["", "profile-info", "delete-profile", "credits", "about"];

    const data = (id) => {
        switch(id) {
            case "profile-info" : return (
                <div>
                    <p>Profile Stats</p>
                    <br></br>
                    <ul>
                        <li>completed tasks: {props.totalTasks}</li>
                        <li>completed goals: {props.totalGoals}</li>
                        <li>total points: {props.points}</li>
                    </ul>
                    <br></br>
                    <p>click outside modal window to exit</p>
                </div>
            )
            case "delete-profile" : return (
                <div>
                    <p>Delete profile? . . . <button id="delete-user" onClick={props.deleteUser}>YES</button></p>
                    <br></br>
                    <p>click outside modal window to exit</p>
                </div>
            )
            case "credits" : 
                return (
                    <div>
                        <h3>useHooks</h3>
                        <h4>
                            Easy to understand React Hook recipes by Gabe Ragland
                            <br></br>
                            <br></br>
                            <a href="https://usehooks.com/useOnClickOutside/" 
                                rel="noopener noreferrer" 
                                target="_blank">
                                <span role="img" aria-label="useHooks logo">useOnClickOutside (🐠)</span>
                            </a>
                            <br></br>
                            <a href="https://usehooks.com/useLockBodyScroll/" 
                                rel="noopener noreferrer" 
                                target="_blank">
                                <span role="img" aria-label="useHooks logo">useLockBodyScroll (🐠)</span>
                            </a>
                        </h4>
                        <br></br>
                        <p>click outside modal window to exit</p>
                    </div>
                )
            case "about" :
                return (
                    <div>
                        <span>
                            -- App Description --
                        </span>
                        <br></br>      
                        <br></br>                      
                        <span>
                            Hello {props.user}. I developed this to-do app first and foremost to learn React. I started with a tutorial and designed the rest of this project around my own desired functionality. I've not utilized anything like a store for state-preservation, so a copy of the state will persist in the localStorage of your device that gets cleared and updated every time the state is set. I intend to remake this app using redux actions and reducers after this build. Just having fun learning for now.
                        </span>
                        <br></br>
                        <br></br>
                        <p>click outside modal window to exit</p>
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
                            profile statistics
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

// useHooks, Easy to understand React Hook recipes by Gabe Ragland:
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