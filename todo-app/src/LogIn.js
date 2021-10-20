import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth";
import { auth } from './firebase-config';

function LogIn() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState(""); 
    
    function handleChange(event) {
       
        switch(event.target.name) {
            case '1': 
                setRegisterEmail(event.target.value);
                break;
            case '2': 
                console.log('password was set')
                setRegisterPassword(event.target.value);
                break; 
            case '3': 
                setLoginEmail(event.target.value);
                break; 
            case '4': 
                setLoginPassword(event.target.value);
                break; 
            default: 
                console.log("i am not working");
                break;
        }
        //
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
                console.log(user)
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
        }).catch ((error)=> {
            const errorCode = error.code;
            const errorMessage= error.message;
            return 'Error ' + errorCode + ": " + errorMessage;
        })
    }

    const logout = async() => {
        signOut(auth).then(() => {
            console.log('signed out!');
        }).catch((error) => {
            console.log(error.message)
        })
    }

    return (
        <div className="LogIn">
            <div className="register">
                <label> <h3>Register</h3>
                    <input type="email" placeholder="Email..." name='1' onChange={handleChange}></input>
                    <input type="password" placeholder="Password" name='2' onChange={handleChange}></input>
                </label>
                <button onClick={()=> {register()}}>Create User</button>
            </div>
            <div className="returningUser">
                <label><h3> Log In </h3>
                    <input type="email" placeholder="Email" name='3' ></input>
                    <input type="password" placeholder="Password" name='4' ></input>
                </label>
                <button onClick={()=> {login()}}>Sign In</button>
            </div>
        <button onClick={()=> {logout()}}>Sign out</button>
        </div>
    )
}


export default LogIn