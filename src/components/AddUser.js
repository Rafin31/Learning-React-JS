import { useParams } from 'react-router-dom';
import './User.css';
import { userList } from '../usersData';
import { users } from '../usersData';
import { getElementById } from 'domutils';
import React, { useState } from 'react';


const AddUser = ({ status, adduser }) => {

    const onSubmit = async (e) => {
        e.preventDefault();

        let result = await fetch("http://127.0.0.1:8000/api/userList", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        console.warn(result);
    }



    var [user, setuser] = useState({
        user_name: '',
        email: '',
        address: '',
        phone_number: '',
        user_type: '',
    });
    //console.log(user.user_id);


    const inputEvent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;

        setuser((prev) => {


            return {
                ...prev,
                [name]: value,
            }
            //console.log(prev);
            // if (name == 'user_id') {
            //     return {
            //         user_id: value,
            //         dept: prev.dept,
            //         name: prev.name,
            //     };

            // } else if (name == "name") {
            //     return {
            //         id: prev.id,
            //         dept: prev.dept,
            //         name: value,
            //     };
            // } else if (name == "dept") {
            //     return {
            //         id: prev.id,
            //         dept: value,
            //         name: prev.name,
            //     };
            // }
        })

    };

    return (

        <div className='adduser'>

            <form onSubmit={onSubmit} >
                <table>

                    <tr>
                        <td>User Name :</td>
                        <td><input type="text" name="user_name" placeholder="enter your User name" onChange={inputEvent} /></td>
                    </tr>
                    <tr>
                        <td>User email :</td>
                        <td><input type="text" name="email" onChange={inputEvent} /></td>
                    </tr>
                    <tr>
                        <td>User address :</td>
                        <td><input type="text" name="address" onChange={inputEvent} /></td>
                    </tr>
                    <tr>
                        <td>User number :</td>
                        <td><input type="text" name="phone_number" onChange={inputEvent} /></td>
                    </tr>
                    <tr>
                        <td>User type :</td>
                        <td><input type="text" name="user_type" onChange={inputEvent} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" name="submit" value="Add user" /></td>
                    </tr>
                </table>
            </form>

            <div className="bottom">
                <h3>Your Enterd Value</h3>
                <h3>ID : <span className='span' >{user.id}</span> </h3>
                <h3>Dept Name : <span className='span' >{user.dept}</span></h3>
                <h3>Name : <span className='span' >{user.name} </span></h3>
            </div>
        </div>
    );

}
export default AddUser;
