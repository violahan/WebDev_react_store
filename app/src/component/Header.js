import React from 'react'
import { Link, withRouter } from 'react-router-dom';
import Panel from "./Panel";
import UserProfile from "./UserProfile";


const Header = props => {
    const toProfile = () => {
        Panel.open({
            component: UserProfile,
            props: {
                user: props.user
            },
            callback: data => {
                if (data === 'logout') {
                    props.history.go(0);
                }
            }
        });
    };
    return (
        <div className="header">
            <div className="grid">
                <div className="start">
                    <Link to="/">Home</Link>
                </div>
                <div className="end">
                    {props.user.nickname ? (
                        <span className="nickname" onClick={toProfile}>
              <i className="far fa-user"></i>
                            {props.user.nickname}
            </span>
                    ) : (
                        <React.Fragment>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </React.Fragment>
                    )}
                </div>
            </div>
        </div>
    );
};

export default withRouter(Header);
