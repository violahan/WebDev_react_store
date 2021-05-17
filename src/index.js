import React from 'react';
import ReactDom from 'react-dom';
import Router from "./Router";
import './css/app.scss';
import './css/style.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDom.render(
    <div>
        <Router/>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </div>,
    document.getElementById('root')
);
