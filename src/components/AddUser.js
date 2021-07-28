import { useParams } from 'react-router-dom';
import './User.css';
import { userList } from '../usersData';
import { users } from '../usersData';
import { getElementById } from 'domutils';
import React, { useState } from 'react';


const AddUser = ({ status, adduser }) => {



    var [user, setuser] = useState({
        user_id: '',
        name: '',
        dept: '',
    });
    //console.log(user);


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
        adduser(user);

    };

    return (

        <div className='adduser'>

            <form>
                <table>
                    <tr>
                        <td>User id :</td>
                        <td><input type="number" name="user_id" placeholder="enter your id" onChange={inputEvent} /></td>
                    </tr>
                    <tr>
                        <td>User Name :</td>
                        <td><input type="text" name="name" onChange={inputEvent} /></td>
                    </tr>
                    <tr>
                        <td>User Dept :</td>
                        <td><input type="text" name="dept" onChange={inputEvent} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" onClick={() => { adduser(user) }} value="Add user" /></td>
                    </tr>
                </table>
            </form>

            <div className="bottom">
                <h3>Your Enterd Value</h3>
                <h3>ID : <span className='span' >{user.user_id}</span> </h3>
                <h3>Dept Name : <span className='span' >{user.dept}</span></h3>
                <h3>Name : <span className='span' >{user.name} </span></h3>
            </div>
        </div>
    );

}
export default AddUser;
