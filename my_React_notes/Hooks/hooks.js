/*

------------------------- Hooks ---------------------------
-> With hooks we can use class component features like state, lifeCycle, pure component etc.
 Hooks allow you to reuse stateful logic without changing your component hierarchy. 


1. useState :- The React useState Hook allows us to track state in a function component.
              State generally refers to data or properties that need to be tracking in an 
              application.
            ->  useState is holding our previous state data it hepls to update state in dom.
            -> while using object in useState does't update and merge object we need
               ...operator to set key's value

2. useEffect :- -> The useEffect let you perform side effect (asychronous) in functional component.
                   and we write useEffect inside the component to access state and props
               -> When we use useEffect basically we are requesting react to execute the function every time 
                 which is useEffect(()={ ..code }) and it runs after every render of the component.
               -> Basically useEffect is a combination  of componentDidMount , 
                componentDidUpdate, componentDidUpdate and componentWillUnmount              

   Condition runs the useEffect -> use dependacy array useEffect(()={ ..code  }, [props and state name] );
                                 it will runs only when our state and props gets updated which we write in 
                                 that array.
                                -> pass [] empty array when we have to perform useEffect only once.

  useEffect with cleanup(componentWillUnomount) => Example :-
  useEffect(
    ()=>{
      componentDidUpdate(runs 1st Time)&&componentWillUpdate( props and state update it runs)
     return ()=>{
      componentWillUnmount( cleanup )
     }    
    },[shouldComonentUpdate()]) 
*/