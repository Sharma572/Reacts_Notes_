/**
 Q.1 =>  FrameWork vs Library?
 Ans => Framework - When you take the framework and plug into your code into the framework
        then we have to follow its rules. They provide blue print for 'apps' 
        * gives little less freedom and follow certain rules like names files in a 
          perticular way.
         * Often :Provies code reuseblity and HTML template also.
          
         * Library - It is just a collection of routines(functional prgramming) or class
                    defination (OOPS) the reason behind is simple to reuse the code.
                    
      *! keys - 
             * A Library is a tool.
             * A Framework is a way of life.
             * A library you can use whatever tiny part helps you.
             * A Framework you must commit your entire project to.
             
Q.2 => What is Npm alternative?
Ans => Yarn (Yet Another Resource Negotiator) is a package manager. It was developed by 
      Facebook and now it open source 
      *! Becaouse of the security and performance reason yarn was created

Q.3 => Raact current version ?
Ans => 18.2.0     and checked from cli - npm view react version       

Q.4 => package.json vs package-lock.json 
Ans => package.json -> stores applciation- file name,version,version, commands,and package information 
       which we have installed.

       package-lock.json ->  it stores node_modules's tree structue the details of package.json
                          file and stores packages histroy and version control.

Q.5 => Which file is most important file and why we don't push node_moudules on github,
       and how we will get these node_modules?

Ans => Package.json is one of the important file because it holds the data of out react app.
       Node modules carry a large number of modules that consume a lot of space, it can be downloaded on the system just by writing (npm install) so that's why we don't push them in GitHub repository.

Q.6 => Can we use nested componet in react js?
Ans => Yes, In React, we can nest components inside within one another. This helps in creating more complex User Interfaces. The components that are nested inside parent components are called child components.

Q.7 => Can we use react js and angular in a same project?
Ans => YES we can use angular and react in same project because angular is a framework but react is just a library we can use it with any project we want

Q.8 => Can we use react without JSX?
Ans => Yes we can do but this process is to complex to understand becoz we are familier with html ,js ,css

*?    example :- 

import React from "react";
function WithoutJsx() {
  return React.createElement("H4", "null", "I have been written without JSX.");
}
export default WithoutJsx;

Q.9 => Can we use Jsx without react?
Ans => JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.

Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.


Q.10 => What is state in react js?
Ans =>  The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders

*!    Note:-
            Whenver we use a varibale in react our component is not updated (freeze).
            To track updates on component we use state.
       ->   State is like a data container which holds any value.
       ->   State is public.


Q.11 => What is prop and why we use them?
Ans => Props are arguments passed into react component . We use props to pass data one component
       to another. Porps stands for property and it is aslo used to render dynamic flow of data in our components. 


Q . => Can we call an Api in componentDidUpdate?
Ans => Yes we can call an Api but when we need conditional api call.

Q => WHich lifeclycle will run first comonentDidUpdate or shouldComponentUpdate?
Ans => shouldComponentUpdate calls first


Q => What is hooks in react?
Ans=>  Hooks allow you to reuse stateful logic without changing your component hierarchy. 




























expot default -> When we have to export all function or classes than this will be used.

       */
