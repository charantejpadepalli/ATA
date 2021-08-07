import { CustomerService } from "../../service/CustomerService";
import {
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
} from "./customerTypes";

export const fetchCustomer = () => {
  //alert("fetching data from database.");
  return (dispatch) => {
    dispatch(fetchCustomerRequest());
    let service = new CustomerService();
    service.findAllCustomer().then((response) => {
      const customers = response.data;
      dispatch(fetchCustomerSuccess(customers));
    })
      .catch((error) => {
        dispatch(fetchCustomerFailure(error.message));
      });
  };
};

export const fetchCustomerRequest = () => {
  return {
    type: FETCH_CUSTOMER_REQUEST,
  };
};

export const fetchCustomerSuccess = (customers) => {
  return {
    type: FETCH_CUSTOMER_SUCCESS,
    payload: customers,
  };
};

export const fetchCustomerFailure = (error) => {
  return {
    type: FETCH_CUSTOMER_FAILURE,
    payload: error,
  };
};
