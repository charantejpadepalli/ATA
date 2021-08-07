import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCustomer } from "../../redux/customer/customerActions";

function Home({ customersData, fetchCustomer }) {
  useEffect(() => {
    fetchCustomer();
  }, []);
  return customersData.loading ? (
    <h2>Loading</h2>
  ) : customersData.error ? (
    <h2>{customersData.error}</h2>
  ) : (
    <div className="py-4">
      <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Gender</th>
            {/* <th scope="col">Mobile No</th> */}
            {/* <th scope="col">Email</th> */}
            {/* <th scope="col">Password</th> */}
            <th scope="col">City</th>
            <th scope="col">Pincode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {alert(JSON.stringify(studentsData))} */}
          {customersData.customers.map((customer, index) => (
            <tr>
              <td>{customer.customerId}</td>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.dateOfBirth}</td>
              <td>{customer.gender}</td>
              {/* <td>{customer.mobileNo}</td>
              <td>{customer.email}</td>
              <td>{customer.password}</td> */}
              <td>{customer.address.city}</td>
              <td>{customer.address.pincode}</td>
              <td>
                <Link
                  className="btn btn-primary mr-2"
                  to={`/customers/view/${customer.customerId}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-primary mr-2"
                  to={`/customers/modify/${customer.customerId}`}
                >
                  Modify
                </Link>
                <Link
                  className="btn btn-outline-primary mr-2"
                  to={`/customers/delete/${customer.customerId}`}>
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    customersData: state.customers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCustomer: () => dispatch(fetchCustomer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
