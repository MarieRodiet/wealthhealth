import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import Form from './pages/Form.jsx';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './features/store.js';

const List = lazy(() => import('./pages/List.jsx'));
const Error = lazy(() => import('./pages/Form.jsx'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename="/">
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route exact path="/" element={<Form />} />
            <Route path="/employeelist" element={<List />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
