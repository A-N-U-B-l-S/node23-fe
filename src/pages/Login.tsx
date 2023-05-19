import './Register.css';
import {SyntheticEvent, useState} from "react";
import axios from 'axios'
import {Navigate} from "react-router-dom";

const Login = () => {


    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const [errorText, setErrorText] = useState('');

    const [redirect, setRedirect] = useState(false);

    const submit = async (e : SyntheticEvent) => {
        e.preventDefault();


        const data = {
            email,
            "password":password,
        };
        //console.log(data);
        const res = await axios.post('http://localhost:3000/auth/login', data, {withCredentials: true});
        //console.log(res);

        if (res.status == 201){
            setRedirect(true);
        }
        if (res.status != 201){
            setErrorText('Napaka v podatkih.');
        }
    }

    if (redirect){
        return <Navigate to={'/'}/>
    }

    return (
        <>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                    <div className="form-floating">
                        <input type="Email address" className="form-control" id="floatingInput" placeholder="name@example.com"
                               onChange={(e) => setEmail(e.target.value)}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="Password" className="form-control" id="floatingPassword" placeholder="Password"
                               onChange={(e) => setPassword(e.target.value)}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                    <h2 className="error">{errorText}</h2>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
                </form>
            </main>
        </>
    )
}

export default Login;