import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.scss';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[ status, setStatus] = useState("")
    const [check, setCheck] = useState(false);

    const handleStart = () => {
        setCheck(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
    
        const response = await fetch("http://localhost:4000/user/register", {
          method: "POST",
          body: formData
        })
        const data = await response.json();
        setStatus(data.status)
      }
    
    useEffect(() => {
        if(status === 'Success') {
            navigate('/login')
        }
    },[status])

    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix" />
                    <button className="loginButton">Sign In</button>
                </div>
                <div className="container">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    {!check ? (
                        <div className="input">
                            <input type='email' placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button className='registerButton' onClick={handleStart}>Get Started</button>
                        </div>
                    ) : (
                        <form className="input" onSubmit={handleSubmit}>
                            <input type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className='registerButton' type='submit'>Start</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Register;