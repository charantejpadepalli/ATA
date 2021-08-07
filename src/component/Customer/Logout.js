import React from 'react';
class Logout extends React.Component{
    componentDidMount(){
        alert('Logout');
        sessionStorage.removeItem('username');
        this.props.history.push('/');
    }
    render(){
        return(
            <div>Logging Out</div>
        )
    }
}
export default Logout;