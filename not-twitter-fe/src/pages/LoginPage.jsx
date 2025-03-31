import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from '../services/authService';
import PageHeader from '../components/PageHeader';

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // basic validation  
        if (username === '' || password === '') {
            props.setError('Username and password are required!');
            return;
        }

        login(username, password)
            .then(() => navigate('/messages'))
            .catch((error) => {
                console.log(error.message);
                props.setError(error.message)
            });

        // reset error message if the form is valid
        props.setError('');
    };

    return (
        <>
            <PageHeader error={props.error} />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="form-control"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Enter your username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                    Login
                </button>
            </form>
        </>
    );
};



export default LoginPage;