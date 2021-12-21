import React, {Fragment} from 'react';
import Login from './components/login'
import Register from './components/register'
import ListUsers from './components/listUsers'
import AddBook from './components/addBook'
import AddCustomer from './components/addCustomer'
import AddCategory from './components/addCategory'
import AddPublisher from './components/addPublisher'
import AddOrder from './components/addOrder'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

  function App() {
    return (
        <Router>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Register />}/>
                    <Route exact path="/login" element={<Login />}/>
                    <Route exact path="/listUsers" element={<ListUsers />}/>
                    <Route exact path="/addBook" element={<AddBook />}/>
                    <Route exact path="/addCustomer" element={<AddCustomer />}/>
                    <Route exact path="/addCategory" element={<AddCategory />}/>
                    <Route exact path="/addOrder" element={<AddOrder />}/>
                    <Route exact path="/addPublisher" element={<AddPublisher />}/>
                </Routes>
            </Fragment>
        </Router>

    );
}

export default App;