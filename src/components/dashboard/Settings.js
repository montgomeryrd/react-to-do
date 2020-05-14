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

    return (
        <div id="settings">
            {settings ? (
                <div className="settings-content" ref={ref}>
                    <h4>It`&apos;`s doing something!</h4>
                    <p>Step 1: Input a task you would like to accomplish today and press the submit button. 
                    Once you have done that, your task will append below, subsequently creating a list of 
                    tasks to perform on this day.</p>
                </div>
            ) : (
                <div className="hamburger" onClick={() => showSettings(!settings)}>
                    <div className="hamburger-lines"></div>
                    <div className="hamburger-lines"></div>
                    <div className="hamburger-lines"></div>
                </div>
            )}
        </div>
    )
}
//             <div onClick={toggleCredits}>
//                 <div className="toggle-credits">
//                     {credits ? 
//                         <span>credits</span>
//                     :
//                         <div>
//                             <h4>Base App build from:</h4>
//                             <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" rel="noopener noreferrer" target="_blank">Chanut is Industries</a>
//                             <p>The Net Ninja - Complete React Tutorial (Redux) #23 - Todo App</p>
//                             <br></br>
//                             <h4>SVG Icons by:</h4>
//                             <a href="https://www.iconfinder.com/Chanut-is" rel="noopener noreferrer" target="_blank">Chanut is Industries</a>
//                             <p>Fantasy and Role-Play Game - Adventure Quest Pack</p>
//                         </div>
//                     }
//                 </div>
//             </div>
//             <div onClick={toggleHelp}>    
//                 <div className="toggle-help">
//                     {help ? 
//                         <span>help</span>
//                     :
//                         <div>
//                             <div onClick={toggleTask}>
//                                 {task ?
//                                     <h4>Tasks Page</h4>
//                                 :
//                                     <ul>
//                                         <li>
//                                             Step 1: Input a task you would like to accomplish today and press the submit button. 
//                                             Once you have done that, your task will append below, subsequently creating a list of
//                                             tasks to perform on this day.
//                                         </li>
//                                         <li>
//                                             Step 2: When you are finished with a task, press on the task you completed. It will 
//                                             be removed from the list and append to your Achievements Page. You will also score 
//                                             arbitrary points that help show in a very small tangible way that you have in fact 
//                                             completed a task at some juncture in the past and can now reflect on your accomplishments 
//                                             via points.
//                                         </li>
//                                         <li>
//                                             (optional): If you feel that a task you created was either a mistake or simply one you 
//                                             will not achieve, you may press on the `&quot;`delete`&quot;` button to remove it from 
//                                             your list, however, no points will be scored because hey... you didn`&apos;`t earn em.
//                                         </li>
//                                     </ul>
//                                 }
//                             </div>
//                             <br></br>
//                             <div onClick={toggleGoal}>
//                                 {goal ?
//                                     <h4>Goals Page</h4>
//                                 :
//                                     <ul>
//                                         <li></li>
//                                     </ul>
//                                 }
//                             </div>
//                             <br></br>
//                             <div onClick={toggleAchievement}>
//                                 {achievement ?
//                                     <h4>Goals Page</h4>
//                                 :
//                                     <ul>
//                                         <li></li>
//                                     </ul>
//                                 }
//                             </div>
//                         </div>
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

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