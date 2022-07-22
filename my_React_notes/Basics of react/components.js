/*
   🔴 What is component and why we use component ?
   -> Component is specific part of code which can be reused, one of the
       core building blocks of react js  
   -> it helps to reuse the same component like header, footer, sidebar
      or which thing we have use again and again in website than component
      is amazing way .

   🔴 types of component
      1. Class component
      2. functional component

      🟢 How to create componet - Class component
 
   // Code starts from here   
      import React from 'react';

       export default class Nav extends React.Component
      {
         render()
               {
                return(
                      <div>
                           <h1>Nav Component</h1>
                      </div>
                     )
               }    
      }
// Code ends here


   🟢 How to create componet - funcional component
   
   import React from 'react'

         function Nav() 
                     {
                        return 
                              (
                                 <div>
                                       Nav
                                 </div>
                              )
                     }
export default Nav


   🟢 How to use component -: import to App.js -> pass return in App 
                           function like that <compName />
 ---------Code starts
    import Nav from './component/Nav';

         function App() 
         {
            return (
                  <>
                     <Nav />
                  </> 
               )
         }
export default App;
 -------------------------- codes ends
*/