import axios from 'axios';

export class CustomerService {
    baseUrl = `http://localhost:9090/user-api/loginreg`;

    addCustomer(customer) {
        return axios.post(this.baseUrl + '/customer/', customer);
    }
    findAllCustomer(){
        return axios.get(this.baseUrl + '/getAllcustomer/');
    }
    deleteCustomerById(customerId) {
        return axios.delete(this.baseUrl+ '/deleteCustomerById/' +customerId);
    }
    findCutstomerById(customerId) {
        return axios.get(`${this.baseUrl}/searchById/${customerId}`);
    }
    CheckLogin(customer){
        return axios.post(this.baseUrl+'/loginCustomer/', customer);
    }
    ModifyCustomer(customer) {
        return axios.put(this.baseUrl + '/updateCustomer/', customer);
    }
}