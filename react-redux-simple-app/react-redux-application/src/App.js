import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import './App.css';
import CakeContainer from './Components/CakeContainer';
// import HookCakeContainer from './Components/HookCakeContainer';
import Icecreamcontainer from './Components/Icecreamcontainer';
import NewCakeContainer from './Components/NewCakeContainer';

function App() {
  return (
   <Provider store = {store}>
      <div className="App">
      <CakeContainer />
     {/*<HookCakeContainer /> */} 
      <Icecreamcontainer />
      <NewCakeContainer />
    </div>
   </Provider>
  );
}

export default App;
