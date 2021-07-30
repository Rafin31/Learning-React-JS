import { useState } from 'react';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import Edituser from './components/edit_user';
import { users } from './usersData';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [myuser, setUsers] = useState(users);

  const deleteCallback = (id) => {
    const data = myuser.filter((user) => user.id !== id);
    console.log(data);
    setUsers(data);
  }

  const adduser = (addedUser) => {

    const totaluser = [...users, addedUser];

    setUsers(totaluser);

  }
  const edituser = (edituser) => {

    const totaluser = [...users, edituser];

    setUsers(totaluser);

  }

  return (

    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <h2>Welcome Home</h2>
        </Route>
        <Route path='/userlist'>
          <div >
            <UserList list={myuser} callback={deleteCallback} />
          </div>
        </Route>
        <Route path='/Create'>
          <AddUser adduser={adduser} />
        </Route>
        <Route path='/edit/:id'>
          <div>
            <Edituser status={'Edit User'} callback={edituser} deleteCallback={deleteCallback} />
          </div>
        </Route>
        <Route path='*'>
          <h3>404 not found</h3>
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
