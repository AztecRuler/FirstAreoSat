import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const data = [
    {
        name: "test 1",
        url: "/test1",
        urlName: "test1",
        content: "1"
  },
    {
        name: "test 2",
        url: "/test2",
        urlName: "test2",
        content: "2"
  },
    {
        name: "test 3",
        url: "/test3",
        urlName: "test2",
        content: "3"
  },
    {
        name: "test 4",
        url: "/test4",
        urlName: "test4",
        content: "4"
  }
];

class Card extends React.Component {   
    render() {
        return (
            <div> 
            { this.props.value }
            </div>
        );
    }
}

class CardContainer extends React.Component {   
    render() {
        var arr=["one", "two", "three", "four"];
        var elements=[];
        for(var i=0;i<arr.length;i++){
            elements.push(<Card value={ arr[i] } />);
        }
        return (
            <div> 
            {elements}
            </div>
        );
    }
}
    
    
const TesterGo = () => <h2>TesterGo</h2>;

const dataComponentNames =[];
const components = [];

for(var i=0; i < data.length; i++) {
components[0] = () => <h2>1TesterGo + {i}</h2>;
components[1] = () => <h2>2TesterGo</h2>;
components[2] = () => <h2>3TesterGo</h2>;
components[3] = () => <h2>4TesterGo</h2>;

}
            
const listItems = data.map(d => < li > <Link to = {d.url} > {d.name} < /Link></li > );

const routes = [];

for(var i=0; i < data.length; i++) {
    var jsonVariable = {};
  jsonVariable.path = data[i].url;
    jsonVariable.component = components[i] = () => <h2>{components[i]}TesterGo</h2>;;
  routes.push(jsonVariable); 
}
routes.push( {
    path: "/TesterGo",
    component: TesterGo
  });

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const RouteConfigExample = () => (
  <Router>
    <div>
      <ul>
   {listItems}
    <li>
              <Link to="/TesterGo">TesterGo</Link>
</li>
      </ul>
          {routes.map((route, j) => <RouteWithSubRoutes key={j} {...route} />)}

    </div>
  </Router>
);

export default RouteConfigExample;