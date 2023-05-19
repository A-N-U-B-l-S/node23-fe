import './Register.css';
import {SyntheticEvent, useState} from "react";
import axios from 'axios'
import {Navigate} from "react-router-dom";

const Register = () => {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[password1, setPassword1] = useState('');
    const[password2, setPassword2] = useState('');

    const [errorText, setErrorText] = useState('');

    const [redirect, setRedirect] = useState(false);

    const submit = async (e : SyntheticEvent) => {
        e.preventDefault();

        if (password1 != password2){
            setErrorText('Gesli se ne ujemata.');
        }

        if (password1 == password2){
            const data = {
                "first_name":firstName,
                "last_name":lastName,
                email,
                "password":password1,
            };
            // console.log(data);
            const res = await axios.post('http://localhost:3000/login', data);
            // console.log(res);
            if (res.status != 201){
                setErrorText('Napaka v registracijskih podatkih.')
                console.log(res.data);
            }
            if (res.status == 201){
                //redirect na login
                setRedirect(true)
            }
        }

    }

    if (redirect){
        return <Navigate to = '/login' />
    }

  return (
      <>
          <main className="form-signin w-100 m-auto">
              <form onSubmit={submit}>
                  <h1 className="h3 mb-3 fw-normal">Please register</h1>
                  <div className="form-floating">
                      <input type="Email address" className="form-control" id="floatingInput" placeholder="name"
                      onChange={(e) => setFirstName(e.target.value)}/>
                      <label htmlFor="floatingInput">First name</label>
                  </div>
                  <div className="form-floating">
                      <input type="Email address" className="form-control" id="floatingInput" placeholder="surname"
                             onChange={(e) => setLastName(e.target.value)}/>
                      <label htmlFor="floatingInput">Last name</label>
                  </div>
                  <div className="form-floating">
                      <input type="Email address" className="form-control" id="floatingInput" placeholder="name@example.com"
                             onChange={(e) => setEmail(e.target.value)}/>
                      <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                      <input type="Password" className="form-control" id="floatingPassword" placeholder="Password"
                             onChange={(e) => setPassword1(e.target.value)}/>
                      <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="form-floating">
                      <input type="Password" className="form-control" id="floatingPassword" placeholder="Password"
                             onChange={(e) => setPassword2(e.target.value)}/>
                      <label htmlFor="floatingPassword">Confirm password</label>
                  </div>
                  <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                  <h2 className="error">{errorText}</h2>
                  <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
              </form>
          </main>
      </>
  )
}

export default Register;