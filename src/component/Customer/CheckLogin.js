import React, { Component } from "react";
import { CustomerService } from "../../service/CustomerService";
import { Customer } from "../../model/Customer";

export class CheckLogin extends Component{
    service = new CustomerService();
    constructor(){
        super();
        this.state = {
            customer: new Customer,
            error:{
                usernameError:'',
                passwordError:''
            }
        }
    }
    validateLoginForm(){
        let flag = true;
        let error = {};
        if(!this.state.customer.email){
            error.usernameError = "Username is Required";
            flag = false;
        }
        if(!this.state.customer.password){
            flag = false;
            error.passwordError = "Password is Required";
        }
        this.setState({error: error})
        return flag;
    }
    submitLoginForm = (e) =>{
        e.preventDefault();
        let isValid = this.validateLoginForm();
        if(!isValid){
            return false;
        }
        // Read form values and give it to LoginService
        this.service.CheckLogin(this.state.customer).then((result)=>{
            alert(result.data);
            sessionStorage.setItem('username',this.state.customer.email);
            this.props.history.push('/customers');
        }).catch((error)=>{
            this.setState({ error : {invalidCredential: 'Invalid Credential'}})
        });
    }

    render(){
        return(
            <form onSubmit={ this.submitLoginForm }>
                <h1>
                    <span className="badge badge-dark">Login</span>
                </h1>
                <div className="form-group mr2">
                    <div className="alert-danger">{this.state.error.usernameError}</div>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter Username"
                        value={this.state.customer.email}
                        onChange={(e)=> this.setState({customer:{...this.state.customer, email: e.target.value}})}
                    />
                </div>
                <div className="form-group">
                    <div className="alert-danger">{this.state.error.passwordError}</div>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        value={this.state.customer.password}
                        onChange={(e)=> this.setState({customer:{...this.state.customer, password: e.target.value}})}
                    />
                </div>
                <div className="form-group">
                    <div className="alert-danger">{this.state.error.invalidCredential}</div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        )
    }

} 