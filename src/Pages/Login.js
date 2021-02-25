import React from 'react';
import NotFound from "./NotFound";


class Login extends React.Component{
    //State
    state = {
        email: '',
        password: ''
    };

    handleSubmit = event=>{
    //    1.组织默认事件行为
        event.preventDefault();

    //    2.获取表单数据
        console.log(this.state);

    //    3。处理登陆逻辑
    //    4。跳转到首页视图
        this.props.history.push('/');

    }

    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    };


    render(){
        return <div className={"login-wrapper"}>
            <form className={"box login-box"} onSubmit={this.handleSubmit}>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input"
                               type="email"
                               placeholder="e.g. viola.han@gmail.com"
                               name={"email"}
                               value={this.state.email}
                               onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input"
                               type="text"
                               placeholder="Password"
                               name={"password"}
                               value={this.state.password}
                               onChange={this.handleChange}

                        />
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
