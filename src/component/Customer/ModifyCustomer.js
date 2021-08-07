import React, { Component } from "react";
import { Customer } from "../../model/Customer";
import { CustomerService } from "../../service/CustomerService";

export class ModifyCustomer extends Component {
    service = new CustomerService();
      state = {
        customer: new Customer(),
        error: {
          firstNameError: "",
          lastNameError: "",
          dateOfBirthError: "",
          genderError:"",
          mobileNoError:"",
          emaileError:"",
          passworderror:"",
          cityError: "",
          pincodeError: ""
        }
      };
      componentDidMount(){
        this.service.findCutstomerById(this.props.match.params.id)
        .then((result) => {
          this.setState({ customer: result.data });
        })
        .catch((error) => {
            alert(JSON.stringify("error: " + error));
        });
      }
  
    validatecustomerForm = () => {
      let flag = true;
      let error = {};
      if (!this.state.customer.firstName) {
        error.firstNameError = 'Customer First Name is required';
        flag = false;
      }
      if (!this.state.customer.lastName) {
        error.lastNameError = 'Customer Last Name is required';
        flag = false;
      }
      if (!this.state.customer.dateOfBirth) {
        error.dateOfBirthError = 'Customer Date Of Birth is required';
        flag = false;
      }
      // if (!this.state.customer.gender) {
      //   error.dateOfBirthError = 'Customer Gender is required';
      //   flag = false;
      // }
      if (!this.state.customer.mobileNo) {
        error. mobileNoError = 'Customer  Mobile No is required';
        flag = false;
      }
      if (!this.state.customer.email) {
        error.emailError = 'Customer  Email is required';
        flag = false;
      }
      if (!this.state.customer.password) {
        error. passwordError = 'Customer  Password is required';
        flag = false;
      }
      if (!this.state.customer.address.city) {
        error.cityError = 'City Name is required';
        flag = false;
      }
      if (!this.state.customer.address.pincode) {
        error.pincodeError = 'Pincode is required';
        flag = false;
      }
      this.setState({ error: error })
      return flag;
    }
  
    submitcustomerForm = (e) => {
      e.preventDefault();
      let isValid = this.validatecustomerForm();
      
      alert(isValid);
      if (!isValid) {
        
        return false;
      }
      this.service.ModifyCustomer(this.state.customer).then(() => {}).catch(() => {});
    // redirect you to Home component after adding user
    this.props.history.push("/customers");
    }
    
  
  
    render() {
      return (
        <div>
          <h2><span className="badge badge-primary">customer Form</span></h2>
          <form onSubmit={this.submitcustomerForm}>
  
            <div className="form-group">
              <div className='alert-danger'>{this.state.error.firstNameError}</div>
              <input className="form-control"
                type="text"
                id="firstName"
                placeholder="Enter Customer First Name"
                value={this.state.customer.firstName}
                onChange={(e) => {
                  this.setState({ customer: { ...this.state.customer, firstName: e.target.value } });
                }}
              />
            </div>
            <div className="form-group">
              <div className='alert-danger'>{this.state.error.lastNameError}</div>
              <input className="form-control"
                type="text"
                id="lastName"
                placeholder="Enter customer Last Name"
                value={this.state.customer.lastName}
                onChange={(e) => {
                  this.setState({ customer: { ...this.state.customer, lastName: e.target.value } });
                }}
              />
            </div>
  
            <div className="form-group">
              <div className='alert-danger'>{this.state.error.dateOfBirthError}</div>
              <input className="form-control"
                type="Date"
                id="dateOfBirth"
                placeholder="Enter customer Date Of Birth"
                value={this.state.customer.dateOfBirth}
                onChange={(e) => this.setState({ customer: { ...this.state.customer, dateOfBirth: e.target.value } })} />
            </div>
            <div className="form-group">
              <div className='alert-danger'>{this.state.error.genderError}</div>
              <select id = "gender" className="select">  
                <option> ---Choose Gender--- </option>  
                <option> MALE </option> 
                <option> FEMALE </option> 
                </select>  
              {/* <input className="form-control"
                type="text"
                id="geder"
                placeholder="Enter customer Gender"
                value={this.state.customer.gender}
                onChange={(e) => this.setState({ customer: { ...this.state.customer, gender: e.target.value } })} /> */}
            </div>
            <div className="form-group">
              <div className='alert-danger'>{this.state.error.mobileNo}</div>
              <input className="form-control"
                type="text"
                id="mobileNo"
                placeholder="Enter customer Mobile No"
                value={this.state.customer.mobileNo}
                onChange={(e) => this.setState({ customer: { ...this.state.customer, mobileNo: e.target.value } })} />
            </div>
            <div className="form-group">
              <div className='alert-danger'>{this.state.error.email}</div>
              <input className="form-control"
                type="text"
                id="email"
                placeholder="Enter customer email"
                value={this.state.customer.email}
                onChange={(e) => this.setState({ customer: { ...this.state.customer, email: e.target.value } })} />
            </div>
            <div className="form-group">
              <div className='alert-danger'>{this.state.error.password}</div>
              <input className="form-control"
                type="password"
                id="password"
                placeholder="Enter customer password"
                value={this.state.customer.password}
                onChange={(e) => this.setState({ customer: { ...this.state.customer, password: e.target.value } })} />
            </div>
            <div className="form-group">
              <div className='alert-danger'>{this.state.error.cityError}</div>
              <input className="form-control" type="text" id="city"
                placeholder="Enter City"
                value={this.state.customer.address.city}
                onChange={(e) => this.setState({ customer: { ...this.state.customer, address: { ...this.state.customer.address, city: e.target.value } } })} />
            </div>
  
            <div className="form-group">
              <div className='alert-danger'>{this.state.error.pincodeError}</div>
              <input className="form-control" type="text" id="pincode" placeholder="Enter Pincode"
                value={this.state.customer.address.pincode}
                onChange={(e) => this.setState({ customer: { ...this.state.customer, address: { ...this.state.customer.address, pincode: e.target.value } } })} />
            </div>
  
            <div className='form-group'>
              <div className='alert-danger'>{this.state.error.invalidCredential}</div>
            </div>
  
            <button className="btn btn-outline-primary">Modify customer</button>
            <hr />
          </form>
        </div>
      );
    }
  }