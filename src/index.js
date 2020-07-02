import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Serie from './components/Serie';
import Chisiamo from './components/Chisiamo';
import Contattaci from './components/Contattaci';
// gli dobbiamo dire ad ogni rotta qual è il componente che gli devo renderizzare



ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App}></Route> 
    <Route path="/serie" component={Serie}></Route>
    <Route path="/chisiamo" component={Chisiamo}></Route>
    <Route path="/contattaci" component={Contattaci}></Route> 
    {/* li ha importati automaticamente */}
  </BrowserRouter>
  ,
  document.getElementById('root') //exact altrimenti renderizza sia conponente con / che /serie 
);
