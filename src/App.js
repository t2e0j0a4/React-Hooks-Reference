import React from 'react';
import StateContext from './Hooks/ContextAPI/Context'
import Users from './Hooks/ContextAPI/ContextState.jsx';
import {UseState , UseEffect , UseRef , UseContext} from './Hooks'

function App() {
  return (
    <StateContext.Provider value={Users}>
      <UseState/>
      <hr/>
      <UseEffect/>
      <hr/>
      <UseRef/>
      <hr/>
      <UseContext/>
    </StateContext.Provider>
  );
}

export default App;
