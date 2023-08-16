import { useEffect, useState } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
    
        const response = await fetch("http://localhost:4000/user/login", {
          method: "POST",
          body: formData
        })
        const data = await response.json();
        sessionStorage.setItem('token', token)
        setToken(data.token)
      }
    useEffect(() => {
        if (token) {
            sessionStorage.setItem('token', token)
            navigate('/home')
        }
    }, [token])

    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix" />
                </div>
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign In</h1>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter Email' />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' />
                        <button type='submit'>Sign In</button>
                        <span>New to Netflix? <b style={{cursor:'pointer'}} onClick={() => navigate("/")}>Sign up </b>now.</span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;