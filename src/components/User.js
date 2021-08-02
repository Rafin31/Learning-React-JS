import { Link } from 'react-router-dom';
import './User.css';

const User = ({ id, user_name, email, address, phone_number, profile_picture, user_type, account_status, deletecallback }) => {
    return (
        <div className='user' style={{ color: 'red' }}>

            <table>
                <th>ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Profile Picture</th>
                <th>User Type</th>
                <th>Account Status</th>

                <tr>
                    <td>{id}</td>
                    <td>{user_name}</td>
                    <td>{email}</td>
                    <td>{address}</td>
                    <td>{phone_number}</td>
                    <td>{profile_picture}</td>
                    <td>{user_type}</td>
                    <td>{account_status}</td>
                    <td>  <button onClick={() => deletecallback(id)}>Delete</button></td>
                    <td> <Link to={`/edit/${id}`}> Edit </Link></td>
                </tr>
            </table>
            {/* <h3>Name: {name}</h3>
            <p>ID: {id}</p>
            <p>Dept: {dept}</p>
            <button onClick={() => deletecallback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> Edit </Link> */}
        </div>
    );
}

export default User;