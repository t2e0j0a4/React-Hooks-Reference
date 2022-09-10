import React from 'react'
import Time from './Learning/Context/Timestate'
import Example1 from './Learning/Example1'

const App = () => {
  return (
    <Time>
      <Example1/>
    </Time>
  )
}

export default App



// import React from 'react';
// import StateContext from './Hooks/ContextAPI/Context'
// import Users from './Hooks/ContextAPI/ContextState.jsx';
// import {UseState , UseEffect , UseRef , UseContext} from './Hooks'

// function App() {
//   return (
//     <StateContext.Provider value={Users}>
//       <UseState/>
//       <hr/>
//       <UseEffect/>
//       <hr/>
//       <UseRef/>
//       <hr/>
//       <UseContext/>
//     </StateContext.Provider>
//   );
// }

// export default App;