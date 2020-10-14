import React from 'react';
import './App.css';
import CakeContainer from "./components/CakeContainer";
import {Provider} from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer"

function App() {
  return (
      <Provider store={ store }>
          <div className="App">
              <br/><br/>--------------------------------Without Hooks-----------------------------<br/><br/>
              <CakeContainer />
              <IceCreamContainer/>
              <br/><br/>--------------------------------With Hooks-----------------------------<br/><br/>
              <HookCakeContainer />
              <HookIceCreamContainer />
          </div>
      </Provider>
  );
}

export default App;
