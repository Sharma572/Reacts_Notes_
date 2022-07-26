/** # Basics of React

React is component-based.

2 types of react component:

 1. Components as functions (Functional Components)

1. A component as a class (class Components) 

*?    JSX → Javascript extension (XML + Javascript)

JSX → HTML look alike integrated js code. 
Babel → Converts your HTML look alike code to React actual code 

*! Babel → React compiler

Why do we use HTML look alike code most of the time? Because it helps us understand the code better visually.

jsx
function MultipleLine() {
  return (
    <div>
      <h1>Hey how are you doing?</h1>
      <h1>I am good</h1>
    </div>
  );
}


The above code converts to the following:


function MultipleLine() {
   return React.createElement(
     "div",
     null,
     React.createElement("h1", null, "Hey how are you doing?"),
     React.createElement("h1", null, "I am good")
   );
 }


Is it compulsory to use JSX in React? **NO**

```jsx
function App() {
  const subRoot = ReactDOM.createRoot(document.getElementById("root"));
  subRoot.render(React.createElement("h1", null, "Newton School"));
}
```


*! Note While importing class components use {CompoNent Name}


JSX makes our code helpful as a visual aid.

Inline CSS has to be written in CamelCase and has to be an object.
*/