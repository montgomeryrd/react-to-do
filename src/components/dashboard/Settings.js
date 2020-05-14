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
    const [state] = useState(["switch-user", "delete-profile", "credits", "about"]);

    const data = (id) => {
        switch(id) {
            case "switch-user" : return (
                <div></div>
            )
            case "delete-profile" : return (
                <div></div>
            )
            case "credits" : 
                return (
                    <div>
                        <h4>Base App build from:</h4>
                        <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" rel="noopener noreferrer" target="_blank">The Net Ninja</a>
                        <p>Complete React Tutorial (Redux) #23 - Todo App</p>
                        <br></br>
                        <h4>SVG Icons by:</h4>
                        <a href="https://www.iconfinder.com/Chanut-is" rel="noopener noreferrer" target="_blank">Chanut is Industries</a>
                        <p>Fantasy and Role-Play Game - Adventure Quest Pack</p>
                    </div>
                )
            case "about" :
                return (
                    <div>
                        <h4>"A conscious life begins with purpose."</h4>
                        <br></br>
                        <span>
                            To-Dohism is an app built with the philosophy that you live 
                            a conscious life when you have purpose. With that in mind, 
                            the app itself is not very robust in functionality, but 
                            rather cuts out a lot of the fat of more powerful to-do list 
                            apps available for more intentional focus and ease of use. 
                            A to-do app that is quick to manage and easy to implement in 
                            day-to-day life. Complete daily tasks, pursue long-term goals, 
                            and know that you are living a conscious life.
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
                        <li id="switch-user" className="settings-list" onClick={() => setPosition(position - position)}>
                            switch user
                        </li>
                        <li id="delete-profile" className="settings-list" onClick={() => setPosition(position - position + 1)}>
                            delete profile
                        </li>
                        <li id="credits" className="settings-list" onClick={() => setPosition(position - position + 2)}>
                            credits
                        </li>
                        <li id="about" className="settings-list" onClick={() => setPosition(position - position + 3)}>
                            about
                        </li>
                    </ul>
                    <br></br>
                    <div>{data(state[position])}</div>
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