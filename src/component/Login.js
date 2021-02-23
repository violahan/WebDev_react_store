import React from 'react';


class Login extends React.Component{
    render(){
        return <div className={"login-wrapper"}>
            <form className={"box login-box"}>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Password" />
                    </div>

                </div>

                <div className="control">
                    <button className="button is-fullwidth is-primary">Login</button>
                </div>
            </form>
        </div>


    }
}

export default Login;