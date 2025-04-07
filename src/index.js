import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Admin from './Admin';
import User from './User';
import AddOrder from './AddOrder';
import ShowOrder from './ShowOrder';
import AddProduct from './AddProduct';
import ShowProduct from './ShowProduct';
import Payment from './Payment';
import PaymentDetails from './PaymentDetails';
import PhoneDetailsPage from './PhoneDetailsPage';
import PhoneOrder from './phoneOrder';
import modifyProduct from './modifyProduct';
import ModifyProductAdmin from './ModifyProductAdmin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
])
const root = ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/user' element={<User/>}></Route>
          <Route path='/addorder' element={<AddOrder/>}></Route>
          <Route path='/showorder' element={<ShowOrder/>}></Route>
          <Route path='/addproduct' element={<AddProduct/>}></Route>
          <Route path='/showproduct' element={<ShowProduct/>}></Route>
          <Route path='/payment' element={<Payment/>}></Route>
          <Route path='/paymentdetails' element={<PaymentDetails/>}></Route>
          <Route path="/phoneDetailsPage/:id" element={<PhoneDetailsPage/>}></Route>
          <Route path="/phoneOrder" element={<PhoneOrder/>}></Route>
          <Route path='/modifyProduct/:id' element={<modifyProduct/>}></Route>
          <Route path='/modifyProductAdmin/:id' element={<ModifyProductAdmin/>}></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
