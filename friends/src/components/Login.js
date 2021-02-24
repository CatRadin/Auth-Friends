import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import '../App.css'

const initialValues = {
    username: '',
    password: ''
}

function Login() {
    //Use History Here--------------------------------------------------------------------
    const history = useHistory();


    //State Here --------------------------------------------------------------------------
    const [credentials, setCredentials ] = useState (initialValues)

    const [error, setError] = useState('')

    //On Change Here------------------------------------------------------------------------
    const onChange = (evt) => {
        
        //This takes credentials and spreads them then sets the state
        setCredentials(
             {
                ...credentials,
                [evt.target.name]: evt.target.value,
            }
        );
        setError('');
    }

    //Login Here -----------------
    const login = (evt) => {
        //Prevents a Page Refresh--------
        evt.preventDefault();

        //A Post that will call to login - Post
        //Receive a 'token' back
        //Store 'token' in local storage

        axios
            .post('http://localhost:5000/api/login', credentials)
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', JSON.stringify(res.data.payload));
                history.push('/friends');
            })
            .catch((err) => {
                setError(err.response.data.error)
            })
    }

    return(
        <div className="login-container">
      <form className="login-form" onSubmit={login}>
        <label>
          
          <input
            type="text"
            name="username"
            placeholder='username'
            value={credentials.username}
            onChange={onChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder='password'
            value={credentials.password}
            onChange={onChange}
          />
        </label>
        <p style={{ color: `red`, fontSize: '12px' }}>{error}</p>
        <button className="login-btn">Login</button>
      </form>
    </div>
    )
}
export default Login