import { logout } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function Header(props) {

    const navigate = useNavigate();

    function handleLogout() {
        logout()
            .then(() => {
                props.setAuthStatus(false);
                navigate('/');
            })
            .catch((error) => {
                console.log(error.message);
                props.setError(error.message)
            });
    }

    return (
        <div className="row mb-3">
            <div className="col-sm-3 text-start">
                <div className="h3 py-2">Not Twitter</div>
            </div>
            <div className="col-sm" />
            <div className="col-sm-3">
                {props.authStatus &&
                    <button
                        className="btn btn-primary"
                        onClick={handleLogout}>
                        Logout
                    </button>}
            </div>
        </div>
    )
}

export default Header;