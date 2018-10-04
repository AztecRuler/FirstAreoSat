import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const data = [
    {
        name: "test 1",
        url: "/test1",
        urlName: "Home",
        content: "1"
  },
    {
        name: "test 2",
        url: "/test2",
        urlName: "Stuff",
        content: "2"
  },
    {
        name: "test 3",
        url: "/test3",
        urlName: "Contact",
        content: "3"
  },
    {
        name: "test 4",
        url: "/test4",
        urlName: "New",
        content: "4"
  }
];

const listItems = data.map(d => < li > <Link to = {d.url} > {d.name} < /Link></li > );


const Main = () => (

  <Router>
    <div>
      <h2>Accounts</h2>
      <ul>
    {listItems}
      </ul>

      <Route path="/:id" component={Child} />
      <Route path="/:content" component={Child} />

    </div>
  </Router>
);

var getContent = () => {
   var result = "";
    var url = () => {
        
    }
for (var i = 0; i < data.length; i++) {
    console.log(data[i].name);
    
    console.dir({Child});
   if(data[i] === {Child}) {
      result = data[i].content;
   }
    console.dir(data[i].content);
}

return result;
}

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const content = ({ match }) => (
  <div>
    <h3>Content: {getContent()}</h3>
  </div>
);

export default Main;