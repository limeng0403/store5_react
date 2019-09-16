import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import "antd-mobile/dist/antd-mobile.css";
import Banner from "./Banner";
import Funball from "./Funball";
import ProductList from "./ProductList";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Banner></Banner>
                <Funball></Funball>
                <ProductList></ProductList>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
