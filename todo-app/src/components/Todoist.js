import {useHistory} from 'react-router-dom';
import {useState} from 'react';

function Todoist() {
    const history= useHistory();
    function openLogIn() {
        history.push('/login');
    }

    const [taskDisplay, setTaskDisplay] =       useState(false)
    const [projectDisplay, setProjectDisplay] = useState(false)
    

    return (
        <div>
            <h1>Projects</h1>
            <div className="tabs"> 
                <button onClick={()=>{
                                setTaskDisplay(true)
                                setProjectDisplay(false)
                                }}>Task</button>
                <button onClick={()=>{setProjectDisplay(true) 
                                        setTaskDisplay(false)}}>Project</button>

            {taskDisplay && <div>Tasks</div>}
            {projectDisplay && <div>Projects</div>}
            </div>
            
            <button onClick={()=> {openLogIn()}}>Start</button>
        </div>
    )

}

export default Todoist;