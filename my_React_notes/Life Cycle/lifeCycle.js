/** 
 *?   What is Life Cycle in React?
 Components are created (mounted on the DOM), grow by updating, and then die (unmount on DOM). This is referred to as a component lifecycle.
 
 Life Cycle methods in React:-
 
 - When Component is loaded
 
 - When Component is updated with state and propos.
 
 - When Component is removed.
 
   1. Mounting -:  Called before your component is displayed on our UI.

   -> Constructor :- This will initilize the value of state and props and runs before the 
                     render method. (Don't call Api in constructor otherwise UI speed will effect.)

   -> render()   :- Basically it is executing the JSX and represent into the DOM (UI).
                    render method calls 2 ways  in 1st times it calls automatically and 2nd time
                    it calls when our state and props is updating.

   -> comoponentDidMount  :- This will called after the render method when our Dom (UI) render 
                        on screen it is usefull for API calls. (No effects of state and props).


   2. Updating -: Caused by a change to props and state and rerender the UI.

   ->componentDidUpdate  :- This will calls when our state and props will updated. it has 3 
                           parameter 1. preState(previous state) 2. preProps(previous props) 
                           3. snapShot
                         Note:-(We should not update our state in this fucntion without condition other it becomes infinite loop)

   -> shouldComponentUpdate :- Update immediately before render.Purpose: Allows developer to 
                               prevent rendering. it will call only updating phase.
                              *! note:- its default value is false it prevent rerender to allow 
                                      rerender return value should be true.
                                     



   3. Unmounting -: called when your UI will no longer display the component.









*/