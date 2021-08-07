import React, { Component } from "react";
import { CustomerService } from "../../service/CustomerService";

export class ViewCustomer extends Component {
    state = {
      customer:{
        address:{}
      } 
    };
    componentDidMount() {
      let service = new CustomerService();
      service.findCutstomerById(this.props.match.params.id)
        .then((result) => {
          this.setState({
            customer: result.data,
          });
        });
    }
  
    homePage = (event) => {
      // event.preventDefault();
      // alert("send to home page");
      this.props.history.push("/customers");
    };
    render() {
      return (
        <div>
          <h1>
            <span className="badge badge-dark">View Customer</span>
          </h1>
          <table className="table table-bordered">
            <tr>
              <td>Customer Id</td>
              <th>{this.state.customer.customerId}</th>
            </tr>
            <tr>
              <td>First Name</td>
              <th>{this.state.customer.firstName}</th>
            </tr>
            <tr>
              <td>Last Name</td>
              <th>{this.state.customer.lastName}</th>
            </tr>
            <tr>
              <td>Date Of Birth</td>
              <th>{this.state.customer.dateOfBirth}</th>
            </tr>
            <tr>
              <td>Gender</td>
              <th>{this.state.customer.gender}</th>
            </tr>
            <tr>
              <td>Mobile No </td>
              <th>{this.state.customer.mobileNo}</th>
            </tr>
            <tr>
              <td>Email</td>
              <th>{this.state.customer.email}</th>
            </tr>
            <tr>
              <td>Password</td>
              <th>{this.state.customer.password}</th>
            </tr>
            <tr>
              <td>City</td>
              <th>{this.state.customer.address.city}</th>
            </tr>
            <tr>
              <td>Pincode</td>
              <th>{this.state.customer.address.pincode}</th>
            </tr>
          </table>
  
          <div className="form-group">
            <button className="btn btn-primary" onClick={this.homePage}>
              Home
            </button>
          </div>
        </div>
      );
    }
  }
  