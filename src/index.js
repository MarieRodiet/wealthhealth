import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import Form from './pages/Form.jsx';
import List from './pages/List.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import { Provider } from 'react-redux';
import { store } from './features/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename="/">
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route path="/employeelist" element={<List />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
