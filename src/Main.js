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


const TesterGo = () => <h2>TesterGo</h2>;

const dataComponentNames =[];
const components = [];

for(var i=0; i < data.length; i++) {
components[i] = () => '<h2>' + i +'TesterGo</h2>';
console.log(i);

}

const listItems = data.map(d => < li > <Link to = {d.url} > {d.name} < /Link></li > );

const routes = [];

for(var i=0; i < data.length; i++) {
    var jsonVariable = {};
  jsonVariable.path = data[i].url;
    jsonVariable.component = components[i];
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