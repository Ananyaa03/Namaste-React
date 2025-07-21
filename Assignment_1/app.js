const parent = React.createElement(
  "div", 
  { id: "parent" }, 
  React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Hello React!"),
      React.createElement("h2", {}, "I am a h2 tag!"),
    ]),
);


ReactDOM.render(parent, document.getElementById("root"));