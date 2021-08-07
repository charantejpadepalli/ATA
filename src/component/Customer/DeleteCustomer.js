import React, { Component } from "react";
import { CustomerService } from "../../service/CustomerService";

export class DeleteCustomer extends Component{
    service = new CustomerService();
    componentDidMount(){
        let customerId = this.props.match.params.customerId;
        // alert(studentId);
        this.service.deleteCustomerById(customerId).then((result)=>{
            alert(result.data);
            this.props.history.push('/customers');
        }).catch((error)=>{
            alert(error);
        })
    }
    render(){
        return(
            <div>
                <p>Deleting Admin ...</p>
            </div>
        )
    }
}