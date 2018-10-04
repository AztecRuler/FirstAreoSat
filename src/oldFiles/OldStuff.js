import React, {
    Component
}
from "react";
import {
    Route,
    NavLink,
    HashRouter
}
from "react-router-dom";


const data = [
    {
        name: "test 1",
        url: "/",
        urlName: "Home",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
    {
        name: "test 2",
        url: "/stuff",
        urlName: "Stuff",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
    {
        name: "test 3",
        url: "/contact",
        urlName: "Contact",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
    {
        name: "test 4",
        url: "/new",
        urlName: "New",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];


const listItems = data.map(d => < li > < NavLink to = {d.url} > {d.name} < /NavLink></li > );

const LOCALSTORAGE_KEY = "someJson";

class Stuff extends Component {
    constructor(props) {
        super(props);

        this.json = {};
    }

    componentWillMount() {
        this.loadJson();
    }

    validateJson(json) {
        let validJson;

        try {
            validJson = JSON.stringify(JSON.parse(this.state.json), null, 2);
        } catch (e) {
            throw e;
        }

        return validJson;
    }

    loadJson = () => {
        const json =
            window.localStorage.getItem(LOCALSTORAGE_KEY) ||
            JSON.stringify(data, null, 2);
        this.setState({
            json
        });
    };

    saveJson = () => {
        const validJson = this.validateJson(this.state.json);

        if (!validJson) return;

        window.localStorage.setItem(LOCALSTORAGE_KEY, validJson);
    };

    handleChange = e =>
        this.setState({
            json: e.target.value
        });

    render() {
        return (

            < div > {
                listItems
            } {
                " "
            } {
                /*       <textarea onChange={this.handleChange} value={this.state.json} />
                                                <button onClick={this.saveJson}>SAVE to LocalStorage</button> 
                                               <button onClick={this.loadJson}>LOAD from LocalStorage</button>*/
            } {
                " "
            } < /div>
        );
    }
}

export default Stuff;