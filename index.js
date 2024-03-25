import React from 'react';

import ReactDOM from 'react-dom';
// ReactDOM file is present in the node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import './App.css'
// import  {Main}  from './Main';
// import Header from './Header';
import './Prac3.css'
import  FlipkartHome  from './Prac3.js';
import Modallog from './Logi1.js';
import Regist from './Regist.js';
// Integrating bootstrap with JS
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { Modal } from 'bootstrap/dist/js/bootstrap.js';

// import a .js file
// if the file is exported as default then "import <fileName>"
// if file is named exported then "import {fileName}" is used

// As the components are rendered we use "<ComponentName>"
ReactDOM.render(<div><FlipkartHome/></div>,document.getElementById("root"))

