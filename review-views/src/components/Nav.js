import { React } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div>

            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">

                            <img src="https://cdn2.vectorstock.com/i/1000x1000/46/31/review-us-user-rating-concept-and-rate-us-vector-26124631.jpg"
                                alt="" width="35" height="35" className="d-inline-block align-text-top" />
                        </a>
                    </div>

                    <ul className="nav navbar-nav">
                        <li className="h1 text-secondary"> Review&Rate </li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li className="h3 text-secondary me-6"><Link onClick={logout} to="/">Logout  &nbsp;&nbsp;&nbsp;&nbsp; ({JSON.parse(auth).name}) </Link> </li>
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Nav
