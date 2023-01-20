import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "redux/auth/auth-operations";


export const LoginForm = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value} }) => {
        switch(name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        dispatch(login({  email, password }))

        setEmail('')
        setPassword('')
    }
    return (
        <form onSubmit={handleFormSubmit}>
            
           <label>
               Email:
                <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
            <label>
               Password:
                <input type="password" name="password" value={password} onChange={handleChange} />
            </label>
            <button>Login</button>
        </form>
    )
}