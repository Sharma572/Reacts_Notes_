/** 


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
                                It will helpful while fetch api data because we need api data once.

  useEffect with cleanup() => It will only call when our component will about to unmount.
                              useEffect() return a function this is clenup function.

 3. useContext() ->  Context provides a way to pass data through the component tree without passing 
                   props to down manually at every level.This a way to prevent from (prop drilling).
                  -> Previously we are using context api -> context -> provider -> consumer(lengthy code).
                  -> then useContext() hook come into the picture we just replace consumer step with useContext
                   
  steps to archeive useContext() -> 1. createContext in parent component.
                                      const MyName = createContext();
                                    2. set the value to provider
                                     <MyName.Provider value={"Raunak Sharma"}> <compA/> <MyName.provider/>
                                      and export {MyName}
                                    3. import the context (MyName);
                                     and assing that props in useContext(propsName) into a variable -> const myName = useContext(MyName)  
                                    Now we can easily use like ->  <h3>My Name is {myName} </h3>

  4. useReducer()  -> useReducer is hook that is used for state managment and it is the alternative of useState
                   -> useReducer(reducer,initialState) accept two parameter and reducer function is also accept two parameter 
                      reducer(currentState,action)


  useEffect(
    ()=>{
      componentDidUpdate(runs 1st Time)&&componentWillUpdate( props and state update it runs)
     return ()=>{
      componentWillUnmount( cleanup )
     }    
    },[shouldComonentUpdate()]) 
*/