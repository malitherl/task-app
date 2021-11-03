import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import {collection, doc, setDoc} from 'firebase/firestore';
import {auth, db} from './firebase-config';

function Todoist() {
    const history= useHistory(); 
    const user = auth.currentUser; 
    const userId = user.uid.toString();
    function openLogIn() {
        history.push('/login');
    }

    const [taskDisplay, setTaskDisplay] =       useState(false)
    const [projectDisplay, setProjectDisplay] = useState(false)
    const [projects, setProject] = useState(
    {
        name: "",
        description: "",
        priority: ""
    })
    

    async function newProject () {


        try {
            await setDoc(doc(db, 'todos', userId, "projects"), {
                project: {
                    name: projects.name,
                    description: projects.description,
                    priority: projects.description,
                }
            })
        } catch (e){
            console.error("Error adding document: ", e);
        }
    }

    function handleChange (event) {
        const {name, value} = event.target
        setProject({...projects, [name]: value}) 
        console.log(projects)
    }





    async function putData() {
        try {
            await setDoc(doc(db, "todos", userId), {
                projects: {
                    "projectA": {
                        task: {
                            name: 'testing tasks add',
                            description: 'successful',
                            priority: '2', 

                        }
                    }
                }
            });
            
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    
    
    }


    return (
        <div>
            <h1>Projects</h1>
            <div className="tabs"> 
                <button onClick={()=>{putData()}}>Create New Project</button>
                <button onClick={()=>{setProjectDisplay(true) 
                                        setTaskDisplay(false)
                        }}>Project</button>

            {taskDisplay && <div>Tasks</div>}
            {projectDisplay && <div>Projects</div>}
        

                    <div>
                        <form onSubmit={newProject}>
                            <input name='name'        onChange= {handleChange}       placeholder="Enter your new project's name"></input>
                            <input name='description' onChange={handleChange}        placeholder='Enter project description'></input>
                            <input name='priority'    onChange={handleChange}        type='number' min='1' max='5'></input>
                            <button type="submit">Create New Project</button>
                        </form>

                    </div>




            </div>
            
            <button onClick={()=> {openLogIn()}}>Sign Out</button>
        </div>
    )

}

export default Todoist;