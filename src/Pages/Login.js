import React from 'react';
import NotFound from "./NotFound";


class Login extends React.Component{

    emailRef= React.createRef();
    passwordRef= React.createRef();

    handleSubmit = event=>{
    //    1.组织默认事件行为
        event.preventDefault();

    //    2.获取表单数据
        const formData= {
            email: this.emailRef.current.value,
            password: this.passwordRef.current.value
        }
        console.log(formData);

    //    3。处理登陆逻辑
    //    4。跳转到首页视图
        this.props.history.push('/');

    }


    render(){
        return <div className={"login-wrapper"}>
            <form className={"box login-box"} onSubmit={this.handleSubmit}>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="e.g. viola.han@gmail.com" ref={this.emailRef} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Password" ref={this.passwordRef}/>
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
