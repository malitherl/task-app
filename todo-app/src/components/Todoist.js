import {useHistory} from 'react-router-dom';





function Todoist() {
    const history= useHistory();
    function openLogIn() {
        history.push('/login');
    }


    return (
        <div>
            <h1>I am working</h1>
            <button onClick={()=> {openLogIn()}}>Start</button>
        </div>
    )

}

export default Todoist;