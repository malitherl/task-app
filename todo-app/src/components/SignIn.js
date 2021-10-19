import react, {useState} from 'react';




function SignIn() {
    const [registerEmail, setRegisteredEmail] = useState("");
    const [registerPassword, setRegisteredPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    const register = async() => {

    } 

    const login=      async() => {

    }
    const logout =    async() => {

    }





return (
    <div>
        <form>
            <label name="Email">
                <input type="email" placeholder="Email..."/>
            </label>
            <label name="Password">
                <input type="password" placeholder="Password..."/>
            </label>
            <button type= "submit">Create Account</button>    
        </form>
    </div>

)

}

export default SignIn();