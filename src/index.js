import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import '../src/index.css';
import { usePromiseTracker } from "react-promise-tracker";
import ResGif from "./restaurantGif.gif"
const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
 
    return (
      promiseInProgress && 
      <div className='loader-container'>
      <img src={ResGif} className='loader-icon' alt='loading' />
      </div>
   );  
  }

  ReactDOM.render(
    <BrowserRouter>
      <App />
      <LoadingIndicator/>
    </BrowserRouter>,
    document.getElementById('root')
  );

