# React Hooks Reference

`useState`\
\
Let's see some of very useful react hooks i.e,
Returns a stateful value, and a function to update it.\
During the initial render, the returned state (state) is the same as the value passed as the first argument (initialState).\
The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.\
`const [state, setState]=useState(initialState);`
###
`useEffect`\
\
Accepts a function that contains imperative, possibly effectful code.\
Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.\
Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.\
`useEffect(() => {
  first
  return () => {
    Clean up
    Second
  };
},[]);`
###
`useContext`\
\
Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.\
\
When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.\
\
Don’t forget that the argument to useContext must be the context object itself:\
Correct: useContext(MyContext)
Incorrect: useContext(MyContext.Consumer)
Incorrect: useContext(MyContext.Provider)\
\
A component calling useContext will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using memoization.
\
`const value = useContext(MyContext);`
###
`useRef`\
\
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.\
`const refContainer = useRef(initialValue);`