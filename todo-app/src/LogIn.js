import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { auth } from './firebase-config';
import Background from "./Background";
import { useHistory } from "react-router-dom";
function LogIn() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState(""); 
    const [modal0Display, setModal0Display] = useState(false);
    const [modal1Display, setModal1Display] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const history= useHistory();
    
    function handleChange(event) {
       
        switch(event.target.name) {
            case '1': 
                setRegisterEmail(event.target.value);
                break;
            case '2': 
                setRegisterPassword(event.target.value);
                break; 
            case '3': 
                setLoginEmail(event.target.value);
                break; 
            case '4': 
                setLoginPassword(event.target.value);
                break; 
            default: 
                break;
        }
        //
    }

    function handleClick(event){
        if(event.target.name === 'modal0'){
            setModal0Display(true)
            setModal1Display(false)
        } 
        else if (event.target.name === 'modal1'){
            setModal1Display(true);
            setModal0Display(false)
        }
        else if (event.target.name === 'backDrop'){
            setModal0Display(false)
            setModal1Display(false);
        }
    }


    
    const register = async () => {
        createUserWithEmailAndPassword(
                auth, 
                registerEmail,
                registerPassword
            ).then ((userCredential) => {
                const user = userCredential.user;
                setLoginEmail(registerEmail)
                setLoginPassword(registerPassword)
            }).catch ((error) => {
                const errorCode = error.code;
                const errorMessage= error.message;
                return 'Error ' + errorCode + ": " + errorMessage;
        });
    
    }

    const login = async () => {
        signInWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        ).then ((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            console.log(user.uid)
            history.push('/app');
        }).catch ((error)=> {
            const errorCode = error.code;
            const errorMessage= error.message;
            return 'Error ' + errorCode + ": " + errorMessage;
        })
    }

    const logout = async() => {
        signOut(auth).then(() => {
            setModal1Display(true)

        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div className="LogIn" name='backDrop' onClick={handleClick}>
          
            { //we need to style all of this eventually
                modal0Display &&  <div className="register">
                                    <label> <h3>Register</h3>

                                                 <input type="email" placeholder="Email..." name='1' onChange={handleChange}></input>
                                                 <br/>
                                                 <input type="password" placeholder="Password" name='2' onChange={handleChange}></input>
                                                    <br/>
                                        
                                    </label>    
                                    <button className="frontPg" onClick={()=> {register()}}>Create User</button>
                                    <button className="frontPg" name='modal1' onClick={handleClick}>Returning User</button>
                                       
                                </div>
            }
            {
                modal1Display && <div className="register">
                                    <label><h3> Log In </h3>
                                        <input type="email" placeholder="Email" name='3' ></input>
                                        <br/>
                                        <input type="password" placeholder="Password" name='4' ></input>
                                        <br/>
                                    </label>
                                    
                                    <button className="frontPg" onClick={()=> {login()}}>Sign In</button>                
                                    <button className="frontPg" name='modal0' onClick={handleClick}>New User</button>
                                </div>
            }
           
            
        <button onClick={()=> {logout()}}>Sign out</button>
        
        </div>
    )
}


export default LogIn