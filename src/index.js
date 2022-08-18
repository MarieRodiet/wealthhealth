import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import Form from './pages/Form.jsx';
import reportWebVitals from './reportWebVitals';
import EmployeeList from './pages/EmployeeList.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Form /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="employeelist" element={<EmployeeList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
